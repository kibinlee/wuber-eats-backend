import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CategoryRepository } from './repositories/category.repository';
import { RestaurantResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, CategoryRepository])], // importing Restaurant feature, forFeture allowing TypeORMModule to import certain features
  providers: [RestaurantResolver, RestaurantService], // Service had to be imported in our "provicers" so it can injected to our Restaurant Resolver class
})
export class RestaurantsModule {}
