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
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { CatalogItemUpdateManyWithoutCatalogModifierGroupsInput } from "./CatalogItemUpdateManyWithoutCatalogModifierGroupsInput";
import { Type } from "class-transformer";
import { MerchantWhereUniqueInput } from "../../merchant/base/MerchantWhereUniqueInput";
import { CatalogItemModifierUpdateManyWithoutCatalogModifierGroupsInput } from "./CatalogItemModifierUpdateManyWithoutCatalogModifierGroupsInput";

@InputType()
class CatalogModifierGroupUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  images?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  itemId?: string | null;

  @ApiProperty({
    required: false,
    type: () => CatalogItemUpdateManyWithoutCatalogModifierGroupsInput,
  })
  @ValidateNested()
  @Type(() => CatalogItemUpdateManyWithoutCatalogModifierGroupsInput)
  @IsOptional()
  @Field(() => CatalogItemUpdateManyWithoutCatalogModifierGroupsInput, {
    nullable: true,
  })
  items?: CatalogItemUpdateManyWithoutCatalogModifierGroupsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maximumSelection?: number;

  @ApiProperty({
    required: false,
    type: () => MerchantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MerchantWhereUniqueInput)
  @IsOptional()
  @Field(() => MerchantWhereUniqueInput, {
    nullable: true,
  })
  merchant?: MerchantWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minimumSelection?: number;

  @ApiProperty({
    required: false,
    type: () => CatalogItemModifierUpdateManyWithoutCatalogModifierGroupsInput,
  })
  @ValidateNested()
  @Type(() => CatalogItemModifierUpdateManyWithoutCatalogModifierGroupsInput)
  @IsOptional()
  @Field(() => CatalogItemModifierUpdateManyWithoutCatalogModifierGroupsInput, {
    nullable: true,
  })
  modifiers?: CatalogItemModifierUpdateManyWithoutCatalogModifierGroupsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  posIntegrationId?: string;
}

export { CatalogModifierGroupUpdateInput as CatalogModifierGroupUpdateInput };
