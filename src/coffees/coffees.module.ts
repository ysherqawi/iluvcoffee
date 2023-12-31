import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';
//import { COFFEE_BRANDS } from './coffees.constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: () => ['buddy brew', 'nescafe'],
    //   // scope: Scope.TRANSIENT, // to specify the scope of a custom provider add scope property
    // },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
