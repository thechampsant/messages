import { MessageRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  messagesRepo: MessageRepository;

  constructor() {
    //service is creating its own dependencies
    //DO NOT DO THIS ON NEST
    this.messagesRepo = new MessageRepository();
  }

  findOne(id: string){
    return this.messagesRepo.findOne(id);
  }

  findAll(){
    return this.messagesRepo.findAll();
  }

  create(content: string){
    return this.messagesRepo.create(content);
  }
}
