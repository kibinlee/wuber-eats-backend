import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // GraphQL decorator to build schema automatically (Thankfully we can combine @ObjectType & @Entity)
@Entity() // This will make TypeORM to save into DB (Thankfully we can combine @ObjectType & @Entity)

//With this single class, we generates GraphQL schema and actual database.
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String) //GraphQL
  @Column() //TypeORM
  name: string;

  @Field((type) => Boolean)
  @Column()
  isGood?: boolean;

  @Field((type) => String)
  @Column()
  address: string;

  @Field((type) => String)
  @Column()
  ownerName: string;

  @Field((type) => String)
  @Column()
  categoryName: string;
}
