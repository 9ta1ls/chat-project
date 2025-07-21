import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}


  // get all rooms 

  @Get('all')
  async findAll(){
    
  }

  // get one room by :id

  @Get(':id')
  async findOne(){

  }

  // post room 

  @Post()
  async create(
    @Body() room: {name: string; description: string}
  ){

  }

  // delete room 

  // edit room 
}
