import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CatalogCategoryServiceBase } from "./base/catalogCategory.service.base";

@Injectable()
export class CatalogCategoryService extends CatalogCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
