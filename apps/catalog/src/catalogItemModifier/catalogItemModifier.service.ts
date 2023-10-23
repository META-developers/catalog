import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CatalogItemModifierServiceBase } from "./base/catalogItemModifier.service.base";

@Injectable()
export class CatalogItemModifierService extends CatalogItemModifierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
