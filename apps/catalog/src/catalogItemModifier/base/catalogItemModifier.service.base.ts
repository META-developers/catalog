/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  CatalogItemModifier,
  CatalogModifierGroup,
  Merchant,
} from "@prisma/client";

export class CatalogItemModifierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CatalogItemModifierCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CatalogItemModifierCountArgs>
  ): Promise<number> {
    return this.prisma.catalogItemModifier.count(args);
  }

  async findMany<T extends Prisma.CatalogItemModifierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CatalogItemModifierFindManyArgs>
  ): Promise<CatalogItemModifier[]> {
    return this.prisma.catalogItemModifier.findMany(args);
  }
  async findOne<T extends Prisma.CatalogItemModifierFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CatalogItemModifierFindUniqueArgs>
  ): Promise<CatalogItemModifier | null> {
    return this.prisma.catalogItemModifier.findUnique(args);
  }
  async create<T extends Prisma.CatalogItemModifierCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CatalogItemModifierCreateArgs>
  ): Promise<CatalogItemModifier> {
    return this.prisma.catalogItemModifier.create<T>(args);
  }
  async update<T extends Prisma.CatalogItemModifierUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CatalogItemModifierUpdateArgs>
  ): Promise<CatalogItemModifier> {
    return this.prisma.catalogItemModifier.update<T>(args);
  }
  async delete<T extends Prisma.CatalogItemModifierDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CatalogItemModifierDeleteArgs>
  ): Promise<CatalogItemModifier> {
    return this.prisma.catalogItemModifier.delete(args);
  }

  async findModifierGroups(
    parentId: string,
    args: Prisma.CatalogModifierGroupFindManyArgs
  ): Promise<CatalogModifierGroup[]> {
    return this.prisma.catalogItemModifier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .modifierGroups(args);
  }

  async getMerchant(parentId: string): Promise<Merchant | null> {
    return this.prisma.catalogItemModifier
      .findUnique({
        where: { id: parentId },
      })
      .merchant();
  }
}
