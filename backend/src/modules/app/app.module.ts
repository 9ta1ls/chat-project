import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModule } from '../room/room.module';
import * as path from 'path';

require('dotenv').config({ 
  path: path.resolve(__dirname, '../../../../../.env') 
});

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_LINK || 'default_connection_string'),
    RoomModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
