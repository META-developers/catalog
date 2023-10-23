import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CatalogScheduleService } from "./catalogSchedule.service";
import { CatalogScheduleControllerBase } from "./base/catalogSchedule.controller.base";

@swagger.ApiTags("catalogSchedules")
@common.Controller("catalogSchedules")
export class CatalogScheduleController extends CatalogScheduleControllerBase {
  constructor(protected readonly service: CatalogScheduleService) {
    super(service);
  }
}
