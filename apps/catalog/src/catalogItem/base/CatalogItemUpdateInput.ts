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
import { CatalogCategoryUpdateManyWithoutCatalogItemsInput } from "./CatalogCategoryUpdateManyWithoutCatalogItemsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsEnum,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { MerchantWhereUniqueInput } from "../../merchant/base/MerchantWhereUniqueInput";
import { CatalogModifierGroupUpdateManyWithoutCatalogItemsInput } from "./CatalogModifierGroupUpdateManyWithoutCatalogItemsInput";
import { EnumCatalogItemSupportedFulfillmentModes } from "./EnumCatalogItemSupportedFulfillmentModes";
import { EnumCatalogItemType } from "./EnumCatalogItemType";

@InputType()
class CatalogItemUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CatalogCategoryUpdateManyWithoutCatalogItemsInput,
  })
  @ValidateNested()
  @Type(() => CatalogCategoryUpdateManyWithoutCatalogItemsInput)
  @IsOptional()
  @Field(() => CatalogCategoryUpdateManyWithoutCatalogItemsInput, {
    nullable: true,
  })
  category?: CatalogCategoryUpdateManyWithoutCatalogItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  categoryId?: string | null;

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
    type: () => CatalogModifierGroupUpdateManyWithoutCatalogItemsInput,
  })
  @ValidateNested()
  @Type(() => CatalogModifierGroupUpdateManyWithoutCatalogItemsInput)
  @IsOptional()
  @Field(() => CatalogModifierGroupUpdateManyWithoutCatalogItemsInput, {
    nullable: true,
  })
  modifierGroups?: CatalogModifierGroupUpdateManyWithoutCatalogItemsInput;

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
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  ordinal?: number;

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

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number;

  @ApiProperty({
    required: false,
    enum: EnumCatalogItemSupportedFulfillmentModes,
    isArray: true,
  })
  @IsEnum(EnumCatalogItemSupportedFulfillmentModes, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumCatalogItemSupportedFulfillmentModes], {
    nullable: true,
  })
  supportedFulfillmentModes?: Array<"PICKUP" | "DELIVERY">;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  suspendedUntil?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumCatalogItemType,
  })
  @IsEnum(EnumCatalogItemType)
  @IsOptional()
  @Field(() => EnumCatalogItemType, {
    nullable: true,
  })
  type?:
    | "ALCOHOL"
    | "FOOD"
    | "REGULAR"
    | "SCHEDULED_SERVICE"
    | "ON_DEMAND_SERVICE";
}

export { CatalogItemUpdateInput as CatalogItemUpdateInput };
