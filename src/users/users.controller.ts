import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'This is findAll';
    }

    @Post()
    create() {
        return 'This is create';
    }
}
