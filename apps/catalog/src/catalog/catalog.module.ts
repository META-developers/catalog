import { Module } from "@nestjs/common";
import { CatalogModuleBase } from "./base/catalog.module.base";
import { CatalogService } from "./catalog.service";
import { CatalogController } from "./catalog.controller";

@Module({
  imports: [CatalogModuleBase],
  controllers: [CatalogController],
  providers: [CatalogService],
  exports: [CatalogService],
})
export class CatalogModule {}
