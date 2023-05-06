import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessageService;

  constructor() {
    //Do not do this on real app, we will use dependency injection
    this.messageService = new MessageService();
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message
  }
}
