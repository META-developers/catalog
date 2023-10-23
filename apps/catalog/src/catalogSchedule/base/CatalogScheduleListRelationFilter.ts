/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CatalogScheduleWhereInput } from "./CatalogScheduleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CatalogScheduleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CatalogScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => CatalogScheduleWhereInput)
  @IsOptional()
  @Field(() => CatalogScheduleWhereInput, {
    nullable: true,
  })
  every?: CatalogScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => CatalogScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => CatalogScheduleWhereInput)
  @IsOptional()
  @Field(() => CatalogScheduleWhereInput, {
    nullable: true,
  })
  some?: CatalogScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => CatalogScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => CatalogScheduleWhereInput)
  @IsOptional()
  @Field(() => CatalogScheduleWhereInput, {
    nullable: true,
  })
  none?: CatalogScheduleWhereInput;
}
export { CatalogScheduleListRelationFilter as CatalogScheduleListRelationFilter };