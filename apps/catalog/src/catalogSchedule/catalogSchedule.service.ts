import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CatalogScheduleServiceBase } from "./base/catalogSchedule.service.base";

@Injectable()
export class CatalogScheduleService extends CatalogScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
