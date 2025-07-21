import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModule } from '../room/room.module';
require ('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(  process.env.DB_LINK || 'default_connection_string'),
    RoomModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
