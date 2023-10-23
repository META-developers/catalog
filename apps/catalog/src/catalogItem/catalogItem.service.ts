import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CatalogItemServiceBase } from "./base/catalogItem.service.base";

@Injectable()
export class CatalogItemService extends CatalogItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
