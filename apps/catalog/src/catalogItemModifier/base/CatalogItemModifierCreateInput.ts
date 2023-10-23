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
import {
  IsString,
  ValidateNested,
  IsOptional,
  IsInt,
  IsNumber,
  IsEnum,
} from "class-validator";
import { MerchantWhereUniqueInput } from "../../merchant/base/MerchantWhereUniqueInput";
import { Type } from "class-transformer";
import { CatalogModifierGroupCreateNestedManyWithoutCatalogItemModifiersInput } from "./CatalogModifierGroupCreateNestedManyWithoutCatalogItemModifiersInput";
import { EnumCatalogItemModifierType } from "./EnumCatalogItemModifierType";

@InputType()
class CatalogItemModifierCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: () => MerchantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MerchantWhereUniqueInput)
  @Field(() => MerchantWhereUniqueInput)
  merchant!: MerchantWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  modifierGroupId?: string | null;

  @ApiProperty({
    required: false,
    type: () =>
      CatalogModifierGroupCreateNestedManyWithoutCatalogItemModifiersInput,
  })
  @ValidateNested()
  @Type(
    () => CatalogModifierGroupCreateNestedManyWithoutCatalogItemModifiersInput
  )
  @IsOptional()
  @Field(
    () => CatalogModifierGroupCreateNestedManyWithoutCatalogItemModifiersInput,
    {
      nullable: true,
    }
  )
  modifierGroups?: CatalogModifierGroupCreateNestedManyWithoutCatalogItemModifiersInput;

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
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  price!: number;

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
    required: true,
    enum: EnumCatalogItemModifierType,
  })
  @IsEnum(EnumCatalogItemModifierType)
  @Field(() => EnumCatalogItemModifierType)
  type!:
    | "ALCOHOL"
    | "FOOD"
    | "REGULAR"
    | "SCHEDULED_SERVICE"
    | "ON_DEMAND_SERVICE";
}

export { CatalogItemModifierCreateInput as CatalogItemModifierCreateInput };
