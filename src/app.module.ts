import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 import { TypeOrmModule } from '@nestjs/typeorm';
 import { Connection } from 'typeorm';
import { MaratonaModule } from './maratona/maratona.module';

@Module({ //ES7 Decorators
  imports: [ TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      autoLoadEntities: true 
    }), MaratonaModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
