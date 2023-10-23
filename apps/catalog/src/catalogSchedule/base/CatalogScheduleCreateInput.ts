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
import { CatalogWhereUniqueInput } from "../../catalog/base/CatalogWhereUniqueInput";
import { ValidateNested, IsEnum, IsBoolean } from "class-validator";
import { Type } from "class-transformer";
import { EnumCatalogScheduleDay } from "./EnumCatalogScheduleDay";

@InputType()
class CatalogScheduleCreateInput {
  @ApiProperty({
    required: true,
    type: () => CatalogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CatalogWhereUniqueInput)
  @Field(() => CatalogWhereUniqueInput)
  catalog!: CatalogWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumCatalogScheduleDay,
  })
  @IsEnum(EnumCatalogScheduleDay)
  @Field(() => EnumCatalogScheduleDay)
  day!:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  enabled!: boolean;
}

export { CatalogScheduleCreateInput as CatalogScheduleCreateInput };
