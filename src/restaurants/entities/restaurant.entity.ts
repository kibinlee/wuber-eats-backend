import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType() // GraphQL decorator to build schema automatically (Thankfully we can combine @ObjectType & @Entity)
@Entity() // This will make TypeORM to save into DB (Thankfully we can combine @ObjectType & @Entity)

//With this single class, we generates GraphQL schema and actual database.
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String) //GraphQL
  @Column() //TypeORM
  @IsString()
  @Length(5)
  name: string;

  //   @Field((type) => Boolean, { defaultValue: true })
  @Field((type) => Boolean, { nullable: true })
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  isVegan?: boolean;

  @Field((type) => String, { defaultValue: 'Gangnam' })
  @Column()
  @IsString()
  address: string;
}
