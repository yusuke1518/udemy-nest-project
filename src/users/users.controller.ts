import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'This is findAll';
    }

    @Post()
    create(@Body('username') body) {
        return body;
    }

    @Get(':username')
    findByUsername(@Param('username') username) {
        return username;
    }
}
