import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll() {
        return 'This is Service findAll';
    }

    create() {
        return 'This is Service create';
    }

    findByUsername() {
        return 'This is Service findByUsername';
    }
}
