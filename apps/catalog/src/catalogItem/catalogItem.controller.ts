import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CatalogItemService } from "./catalogItem.service";
import { CatalogItemControllerBase } from "./base/catalogItem.controller.base";

@swagger.ApiTags("catalogItems")
@common.Controller("catalogItems")
export class CatalogItemController extends CatalogItemControllerBase {
  constructor(protected readonly service: CatalogItemService) {
    super(service);
  }
}
