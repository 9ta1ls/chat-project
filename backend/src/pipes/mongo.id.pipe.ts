import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import {Types} from 'mongoose';

@Injectable()
export class MongoIdPipe implements PipeTransform{
    transform(value: string){
        if(!Types.ObjectId.isValid(value)){
            throw new BadRequestException('invalid MongoDB Object ID')
        }
        return value;
    }   
}