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
import { CatalogCategoryCreateNestedManyWithoutCatalogsInput } from "./CatalogCategoryCreateNestedManyWithoutCatalogsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { MerchantWhereUniqueInput } from "../../merchant/base/MerchantWhereUniqueInput";
import { CatalogScheduleCreateNestedManyWithoutCatalogsInput } from "./CatalogScheduleCreateNestedManyWithoutCatalogsInput";

@InputType()
class CatalogCreateInput {
  @ApiProperty({
    required: true,
    type: () => CatalogCategoryCreateNestedManyWithoutCatalogsInput,
  })
  @ValidateNested()
  @Type(() => CatalogCategoryCreateNestedManyWithoutCatalogsInput)
  @IsOptional()
  @Field(() => CatalogCategoryCreateNestedManyWithoutCatalogsInput, {
    nullable: true,
  })
  categories?: CatalogCategoryCreateNestedManyWithoutCatalogsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  enabled!: boolean;

  @ApiProperty({
    required: true,
    type: () => MerchantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MerchantWhereUniqueInput)
  @Field(() => MerchantWhereUniqueInput)
  merchant!: MerchantWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  posIntegrationId!: string;

  @ApiProperty({
    required: false,
    type: () => CatalogScheduleCreateNestedManyWithoutCatalogsInput,
  })
  @ValidateNested()
  @Type(() => CatalogScheduleCreateNestedManyWithoutCatalogsInput)
  @IsOptional()
  @Field(() => CatalogScheduleCreateNestedManyWithoutCatalogsInput, {
    nullable: true,
  })
  schedule?: CatalogScheduleCreateNestedManyWithoutCatalogsInput;
}

export { CatalogCreateInput as CatalogCreateInput };