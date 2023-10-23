import { Module } from "@nestjs/common";
import { CatalogModifierGroupModuleBase } from "./base/catalogModifierGroup.module.base";
import { CatalogModifierGroupService } from "./catalogModifierGroup.service";
import { CatalogModifierGroupController } from "./catalogModifierGroup.controller";

@Module({
  imports: [CatalogModifierGroupModuleBase],
  controllers: [CatalogModifierGroupController],
  providers: [CatalogModifierGroupService],
  exports: [CatalogModifierGroupService],
})
export class CatalogModifierGroupModule {}
