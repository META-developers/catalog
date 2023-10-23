import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CatalogItemModifierService } from "./catalogItemModifier.service";
import { CatalogItemModifierControllerBase } from "./base/catalogItemModifier.controller.base";

@swagger.ApiTags("catalogItemModifiers")
@common.Controller("catalogItemModifiers")
export class CatalogItemModifierController extends CatalogItemModifierControllerBase {
  constructor(protected readonly service: CatalogItemModifierService) {
    super(service);
  }
}
