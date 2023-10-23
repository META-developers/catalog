import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CatalogCategoryService } from "./catalogCategory.service";
import { CatalogCategoryControllerBase } from "./base/catalogCategory.controller.base";

@swagger.ApiTags("catalogCategories")
@common.Controller("catalogCategories")
export class CatalogCategoryController extends CatalogCategoryControllerBase {
  constructor(protected readonly service: CatalogCategoryService) {
    super(service);
  }
}
