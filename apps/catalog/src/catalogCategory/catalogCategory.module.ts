import { Module } from "@nestjs/common";
import { CatalogCategoryModuleBase } from "./base/catalogCategory.module.base";
import { CatalogCategoryService } from "./catalogCategory.service";
import { CatalogCategoryController } from "./catalogCategory.controller";

@Module({
  imports: [CatalogCategoryModuleBase],
  controllers: [CatalogCategoryController],
  providers: [CatalogCategoryService],
  exports: [CatalogCategoryService],
})
export class CatalogCategoryModule {}
