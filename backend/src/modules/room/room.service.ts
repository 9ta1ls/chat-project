import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from 'db/schemas/room.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
    constructor(
        @InjectModel(Room.name) private readonly roomModel: Model<Room>
    ){}


    async getAllRooms(){
        return await this.roomModel.find().exec();
    }

    async getOneRoom(id: string){
        const room = await this.roomModel.findById(id).exec();
        if (!room) {
            throw new NotFoundException(`Room with id ${id} not found`);
        }
        return room;
    }

    async createRoom(createRoomDto: CreateRoomDto){
        const roomCheck = await this.roomModel.findOne({name: createRoomDto.name})
        if(roomCheck){
            throw new BadRequestException('Room with this name is already created');
        }
        const newRoom = new this.roomModel(createRoomDto)
        return await newRoom.save();
    }


    async deleteRoom(id: string){
        const deletedRoom = await this.roomModel.findByIdAndDelete(id).exec();
        if (!deletedRoom) {
            throw new NotFoundException(`Room with id ${id} not found`);
        }
        return deletedRoom;
    }

    async updateRoom(id: string, updateRoomDto: UpdateRoomDto){
        const updatedRoom = await this.roomModel.findByIdAndUpdate(
            id,
            updateRoomDto,
            {new: true}
        );
        if (!updatedRoom){
            throw new NotFoundException('Room not found');
        }
        return updatedRoom;
    }
}
