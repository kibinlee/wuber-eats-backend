import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@InputType({ isAbstract: true })
@ObjectType() // GraphQL decorator to build schema automatically (Thankfully we can combine @ObjectType & @Entity)
@Entity() // This will make TypeORM to save into DB (Thankfully we can combine @ObjectType & @Entity)

//With this single class, we generates GraphQL schema and actual database.
export class Restaurant extends CoreEntity {
  @Field((type) => String) //GraphQL
  @Column() //TypeORM
  @IsString()
  @Length(5)
  name: string;

  //   @Field((type) => Boolean, { defaultValue: true })
  @Field((type) => String, { defaultValue: 'Gangnam' })
  @Column()
  @IsString()
  address: string;

  @Field((type) => Category)
  @ManyToOne((type) => Category, (category) => category.restaurants)
  category: Category;
}
