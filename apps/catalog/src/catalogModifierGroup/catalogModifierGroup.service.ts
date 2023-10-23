import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CatalogModifierGroupServiceBase } from "./base/catalogModifierGroup.service.base";

@Injectable()
export class CatalogModifierGroupService extends CatalogModifierGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
