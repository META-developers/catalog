/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CatalogItemModifierWhereInput } from "./CatalogItemModifierWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CatalogItemModifierOrderByInput } from "./CatalogItemModifierOrderByInput";

@ArgsType()
class CatalogItemModifierFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CatalogItemModifierWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CatalogItemModifierWhereInput, { nullable: true })
  @Type(() => CatalogItemModifierWhereInput)
  where?: CatalogItemModifierWhereInput;

  @ApiProperty({
    required: false,
    type: [CatalogItemModifierOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CatalogItemModifierOrderByInput], { nullable: true })
  @Type(() => CatalogItemModifierOrderByInput)
  orderBy?: Array<CatalogItemModifierOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CatalogItemModifierFindManyArgs as CatalogItemModifierFindManyArgs };
