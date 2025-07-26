import { Body, Controller, Get, Post, Param, Delete, Put} from '@nestjs/common';
import { RoomService } from './room.service';
import { MongoIdPipe } from 'src/pipes/mongo.id.pipe';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}


  // get all rooms 
  @Get('all')
  async getAll(){
    return this.roomService.getAllRooms();
  }

  // get one room by :id
  @Get(':id')
  async getOne(@Param('id', MongoIdPipe) id: string){
    return this.roomService.getOneRoom(id);
  }

  // post room 
  @Post()
  async create(
    @Body() createRoomDto: CreateRoomDto
  ){
    return this.roomService.createRoom(createRoomDto);
  }

  // delete room 
  @Delete(':id')
  async delete(@Param('id', MongoIdPipe) id: string){
    return this.roomService.deleteRoom(id);
  }

  // update room 
  @Put(':id')
  async edit(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateRoomDto: UpdateRoomDto
  ){
    return this.roomService.updateRoom(id, updateRoomDto);
  }

}
