import { Controller, Get, Post, Req, Request, Param, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maratona } from './maratona.entity';

@Controller('maratona')
export class MaratonaController {
    constructor(
        @InjectRepository(Maratona)
        private repository: Repository<Maratona>,
    ) {}

    @Get()
    list(): Promise<Maratona[]> {
        return this.repository.find();
    }

    @Post()
    async create(@Req() request: Request) {
        const maratona = this.repository.create(request.body as any);
        
        await this.repository.save(maratona);
        
        return maratona;
    }

    @Get(':id')
    async show(@Param('id') id) {
        return await this.repository.findOneOrFail({where: {id}});
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.repository.delete({id});
    }

}
