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
import { CatalogWhereInput } from "./CatalogWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CatalogCountArgs {
  @ApiProperty({
    required: false,
    type: () => CatalogWhereInput,
  })
  @Field(() => CatalogWhereInput, { nullable: true })
  @Type(() => CatalogWhereInput)
  where?: CatalogWhereInput;
}

export { CatalogCountArgs as CatalogCountArgs };
