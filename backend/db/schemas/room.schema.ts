import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Room {
    @Prop({ required: true , unique: true })
    name: string;

    @Prop()
    description: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);