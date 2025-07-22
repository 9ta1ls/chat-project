import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from 'db/schemas/room.schema';

@Injectable()
export class RoomService {
    constructor(
        @InjectModel(Room.name) private readonly roomModel: Model<Room>
    ){}


    async getAllRooms(){
        return await this.roomModel.find().exec();
    }

    async createRoom(room: {name: string, description: string}){
        const newRoom = new this.roomModel(room)
        return await newRoom.save();
    }
}
