/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MerchantService } from "../merchant.service";
import { MerchantCreateInput } from "./MerchantCreateInput";
import { MerchantWhereInput } from "./MerchantWhereInput";
import { MerchantWhereUniqueInput } from "./MerchantWhereUniqueInput";
import { MerchantFindManyArgs } from "./MerchantFindManyArgs";
import { MerchantUpdateInput } from "./MerchantUpdateInput";
import { Merchant } from "./Merchant";
import { CatalogCategoryFindManyArgs } from "../../catalogCategory/base/CatalogCategoryFindManyArgs";
import { CatalogCategory } from "../../catalogCategory/base/CatalogCategory";
import { CatalogCategoryWhereUniqueInput } from "../../catalogCategory/base/CatalogCategoryWhereUniqueInput";
import { CatalogItemFindManyArgs } from "../../catalogItem/base/CatalogItemFindManyArgs";
import { CatalogItem } from "../../catalogItem/base/CatalogItem";
import { CatalogItemWhereUniqueInput } from "../../catalogItem/base/CatalogItemWhereUniqueInput";
import { CatalogFindManyArgs } from "../../catalog/base/CatalogFindManyArgs";
import { Catalog } from "../../catalog/base/Catalog";
import { CatalogWhereUniqueInput } from "../../catalog/base/CatalogWhereUniqueInput";
import { CatalogModifierGroupFindManyArgs } from "../../catalogModifierGroup/base/CatalogModifierGroupFindManyArgs";
import { CatalogModifierGroup } from "../../catalogModifierGroup/base/CatalogModifierGroup";
import { CatalogModifierGroupWhereUniqueInput } from "../../catalogModifierGroup/base/CatalogModifierGroupWhereUniqueInput";
import { CatalogItemModifierFindManyArgs } from "../../catalogItemModifier/base/CatalogItemModifierFindManyArgs";
import { CatalogItemModifier } from "../../catalogItemModifier/base/CatalogItemModifier";
import { CatalogItemModifierWhereUniqueInput } from "../../catalogItemModifier/base/CatalogItemModifierWhereUniqueInput";

export class MerchantControllerBase {
  constructor(protected readonly service: MerchantService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Merchant })
  async create(@common.Body() data: MerchantCreateInput): Promise<Merchant> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Merchant] })
  @ApiNestedQuery(MerchantFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Merchant[]> {
    const args = plainToClass(MerchantFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Merchant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: MerchantWhereUniqueInput
  ): Promise<Merchant | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Merchant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() data: MerchantUpdateInput
  ): Promise<Merchant | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Merchant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: MerchantWhereUniqueInput
  ): Promise<Merchant | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/catalogCategories")
  @ApiNestedQuery(CatalogCategoryFindManyArgs)
  async findManyCatalogCategories(
    @common.Req() request: Request,
    @common.Param() params: MerchantWhereUniqueInput
  ): Promise<CatalogCategory[]> {
    const query = plainToClass(CatalogCategoryFindManyArgs, request.query);
    const results = await this.service.findCatalogCategories(params.id, {
      ...query,
      select: {
        catalogId: true,
        createdAt: true,
        description: true,
        id: true,
        images: true,

        merchant: {
          select: {
            id: true,
          },
        },

        name: true,
        ordinal: true,
        posIntegrationId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/catalogCategories")
  async connectCatalogCategories(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogCategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalogCategories: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/catalogCategories")
  async updateCatalogCategories(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogCategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalogCategories: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/catalogCategories")
  async disconnectCatalogCategories(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogCategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalogCategories: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/catalogItems")
  @ApiNestedQuery(CatalogItemFindManyArgs)
  async findManyCatalogItems(
    @common.Req() request: Request,
    @common.Param() params: MerchantWhereUniqueInput
  ): Promise<CatalogItem[]> {
    const query = plainToClass(CatalogItemFindManyArgs, request.query);
    const results = await this.service.findCatalogItems(params.id, {
      ...query,
      select: {
        categoryId: true,
        createdAt: true,
        description: true,
        id: true,
        images: true,

        merchant: {
          select: {
            id: true,
          },
        },

        name: true,
        ordinal: true,
        posIntegrationId: true,
        price: true,
        supportedFulfillmentModes: true,
        suspendedUntil: true,
        type: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/catalogItems")
  async connectCatalogItems(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalogItems: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/catalogItems")
  async updateCatalogItems(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalogItems: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/catalogItems")
  async disconnectCatalogItems(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalogItems: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/catalogs")
  @ApiNestedQuery(CatalogFindManyArgs)
  async findManyCatalogs(
    @common.Req() request: Request,
    @common.Param() params: MerchantWhereUniqueInput
  ): Promise<Catalog[]> {
    const query = plainToClass(CatalogFindManyArgs, request.query);
    const results = await this.service.findCatalogs(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        enabled: true,
        id: true,

        merchant: {
          select: {
            id: true,
          },
        },

        name: true,
        posIntegrationId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/catalogs")
  async connectCatalogs(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalogs: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/catalogs")
  async updateCatalogs(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalogs: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/catalogs")
  async disconnectCatalogs(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalogs: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/modifierGroups")
  @ApiNestedQuery(CatalogModifierGroupFindManyArgs)
  async findManyModifierGroups(
    @common.Req() request: Request,
    @common.Param() params: MerchantWhereUniqueInput
  ): Promise<CatalogModifierGroup[]> {
    const query = plainToClass(CatalogModifierGroupFindManyArgs, request.query);
    const results = await this.service.findModifierGroups(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        images: true,
        itemId: true,
        maximumSelection: true,

        merchant: {
          select: {
            id: true,
          },
        },

        minimumSelection: true,
        name: true,
        posIntegrationId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/modifierGroups")
  async connectModifierGroups(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogModifierGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modifierGroups: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/modifierGroups")
  async updateModifierGroups(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogModifierGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modifierGroups: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/modifierGroups")
  async disconnectModifierGroups(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogModifierGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modifierGroups: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/modifiers")
  @ApiNestedQuery(CatalogItemModifierFindManyArgs)
  async findManyModifiers(
    @common.Req() request: Request,
    @common.Param() params: MerchantWhereUniqueInput
  ): Promise<CatalogItemModifier[]> {
    const query = plainToClass(CatalogItemModifierFindManyArgs, request.query);
    const results = await this.service.findModifiers(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        merchant: {
          select: {
            id: true,
          },
        },

        modifierGroupId: true,
        name: true,
        posIntegrationId: true,
        price: true,
        suspendedUntil: true,
        type: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/modifiers")
  async connectModifiers(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogItemModifierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modifiers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/modifiers")
  async updateModifiers(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogItemModifierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modifiers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/modifiers")
  async disconnectModifiers(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: CatalogItemModifierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modifiers: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}