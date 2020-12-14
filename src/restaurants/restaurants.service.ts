import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EntityRepositoryMetadataArgs } from "typeorm/metadata-args/EntityRepositoryMetadataArgs";
import { Restaurant } from "./entities/restaurant.entity";

@Injectable()
export class RestaurantService{
    constructor(
        @InjectRepository(Restaurant)
        private readonly restaurants: Repository<Restaurant>,
    ){}
    getAll(): Promise<Restaurant[]>{
        return this.restaurants.find();
    }

}