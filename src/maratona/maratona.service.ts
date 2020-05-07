import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maratona } from './maratona.entity';

@Injectable()
export class MaratonaService {

    constructor(
        @InjectRepository(Maratona)
        private repository: Repository<Maratona>,
    ) {}
    
    findAll(): Promise<Maratona[]> {
        return this.repository.find();
    }
    
    findOne(id: string): Promise<Maratona> {
        return this.repository.findOne(id);
    }

    async add(maratona: Maratona): Promise<Maratona> {
        const novo = this.repository.create(maratona);
        return this.repository.save(novo);
    }
    
    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}
