import { Module } from "@nestjs/common";
import { CatalogItemModifierModuleBase } from "./base/catalogItemModifier.module.base";
import { CatalogItemModifierService } from "./catalogItemModifier.service";
import { CatalogItemModifierController } from "./catalogItemModifier.controller";

@Module({
  imports: [CatalogItemModifierModuleBase],
  controllers: [CatalogItemModifierController],
  providers: [CatalogItemModifierService],
  exports: [CatalogItemModifierService],
})
export class CatalogItemModifierModule {}
