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
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { MerchantWhereUniqueInput } from "../../merchant/base/MerchantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CatalogModifierGroupListRelationFilter } from "../../catalogModifierGroup/base/CatalogModifierGroupListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EnumCatalogItemModifierType } from "./EnumCatalogItemModifierType";

@InputType()
class CatalogItemModifierWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  description?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  modifierGroupId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => CatalogModifierGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CatalogModifierGroupListRelationFilter)
  @IsOptional()
  @Field(() => CatalogModifierGroupListRelationFilter, {
    nullable: true,
  })
  modifierGroups?: CatalogModifierGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  posIntegrationId?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  price?: IntFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  suspendedUntil?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumCatalogItemModifierType,
  })
  @IsEnum(EnumCatalogItemModifierType)
  @IsOptional()
  @Field(() => EnumCatalogItemModifierType, {
    nullable: true,
  })
  type?:
    | "ALCOHOL"
    | "FOOD"
    | "REGULAR"
    | "SCHEDULED_SERVICE"
    | "ON_DEMAND_SERVICE";

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;
}

export { CatalogItemModifierWhereInput as CatalogItemModifierWhereInput };
