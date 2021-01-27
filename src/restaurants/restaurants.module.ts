import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, Category])], // importing Restaurant feature, forFeture allowing TypeORMModule to import certain features
  providers: [RestaurantResolver, RestaurantService], // Service had to be imported in our "provicers" so it can injected to our Restaurant Resolver class
})
export class RestaurantsModule {}
