import { Module } from "@nestjs/common";
import { CatalogItemModuleBase } from "./base/catalogItem.module.base";
import { CatalogItemService } from "./catalogItem.service";
import { CatalogItemController } from "./catalogItem.controller";

@Module({
  imports: [CatalogItemModuleBase],
  controllers: [CatalogItemController],
  providers: [CatalogItemService],
  exports: [CatalogItemService],
})
export class CatalogItemModule {}
