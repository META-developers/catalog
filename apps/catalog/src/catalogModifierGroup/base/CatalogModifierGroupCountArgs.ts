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
import { CatalogModifierGroupWhereInput } from "./CatalogModifierGroupWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CatalogModifierGroupCountArgs {
  @ApiProperty({
    required: false,
    type: () => CatalogModifierGroupWhereInput,
  })
  @Field(() => CatalogModifierGroupWhereInput, { nullable: true })
  @Type(() => CatalogModifierGroupWhereInput)
  where?: CatalogModifierGroupWhereInput;
}

export { CatalogModifierGroupCountArgs as CatalogModifierGroupCountArgs };