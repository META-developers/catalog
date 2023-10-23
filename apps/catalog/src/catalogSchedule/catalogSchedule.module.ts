import { Module } from "@nestjs/common";
import { CatalogScheduleModuleBase } from "./base/catalogSchedule.module.base";
import { CatalogScheduleService } from "./catalogSchedule.service";
import { CatalogScheduleController } from "./catalogSchedule.controller";

@Module({
  imports: [CatalogScheduleModuleBase],
  controllers: [CatalogScheduleController],
  providers: [CatalogScheduleService],
  exports: [CatalogScheduleService],
})
export class CatalogScheduleModule {}
