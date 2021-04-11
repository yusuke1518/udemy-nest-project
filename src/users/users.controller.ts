import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService){}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    create(@Body('username') body) {
        return this.service.create();
    }

    @Get(':username')
    findByUsername(@Param('username') username) {
        return this.service.findByUsername();
    }
}
