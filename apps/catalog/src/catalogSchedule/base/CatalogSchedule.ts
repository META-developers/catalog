/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Catalog } from "../../catalog/base/Catalog";
import {
  ValidateNested,
  IsDate,
  IsEnum,
  IsBoolean,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumCatalogScheduleDay } from "./EnumCatalogScheduleDay";

@ObjectType()
class CatalogSchedule {
  @ApiProperty({
    required: true,
    type: () => Catalog,
  })
  @ValidateNested()
  @Type(() => Catalog)
  catalog?: Catalog;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumCatalogScheduleDay,
  })
  @IsEnum(EnumCatalogScheduleDay)
  @Field(() => EnumCatalogScheduleDay, {
    nullable: true,
  })
  day?:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  enabled!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { CatalogSchedule as CatalogSchedule };
