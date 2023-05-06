import { MessageRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  // messagesRepo: MessageRepository;
  // constructor(messagesRepo: MessageRepository) {
  //   this.messagesRepo = messagesRepo
  // }

  constructor(public messagesRepo: MessageRepository) {} //typescript equivalent to above code

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
