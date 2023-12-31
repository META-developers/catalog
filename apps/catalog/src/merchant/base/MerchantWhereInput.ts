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
import { CatalogCategoryListRelationFilter } from "../../catalogCategory/base/CatalogCategoryListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CatalogItemListRelationFilter } from "../../catalogItem/base/CatalogItemListRelationFilter";
import { CatalogListRelationFilter } from "../../catalog/base/CatalogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { CatalogModifierGroupListRelationFilter } from "../../catalogModifierGroup/base/CatalogModifierGroupListRelationFilter";
import { CatalogItemModifierListRelationFilter } from "../../catalogItemModifier/base/CatalogItemModifierListRelationFilter";

@InputType()
class MerchantWhereInput {
  @ApiProperty({
    required: false,
    type: () => CatalogCategoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CatalogCategoryListRelationFilter)
  @IsOptional()
  @Field(() => CatalogCategoryListRelationFilter, {
    nullable: true,
  })
  catalogCategories?: CatalogCategoryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CatalogItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CatalogItemListRelationFilter)
  @IsOptional()
  @Field(() => CatalogItemListRelationFilter, {
    nullable: true,
  })
  catalogItems?: CatalogItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CatalogListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CatalogListRelationFilter)
  @IsOptional()
  @Field(() => CatalogListRelationFilter, {
    nullable: true,
  })
  catalogs?: CatalogListRelationFilter;

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
    type: () => CatalogItemModifierListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CatalogItemModifierListRelationFilter)
  @IsOptional()
  @Field(() => CatalogItemModifierListRelationFilter, {
    nullable: true,
  })
  modifiers?: CatalogItemModifierListRelationFilter;
}

export { MerchantWhereInput as MerchantWhereInput };
