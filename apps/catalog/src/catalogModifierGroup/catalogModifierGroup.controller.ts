import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CatalogModifierGroupService } from "./catalogModifierGroup.service";
import { CatalogModifierGroupControllerBase } from "./base/catalogModifierGroup.controller.base";

@swagger.ApiTags("catalogModifierGroups")
@common.Controller("catalogModifierGroups")
export class CatalogModifierGroupController extends CatalogModifierGroupControllerBase {
  constructor(protected readonly service: CatalogModifierGroupService) {
    super(service);
  }
}
