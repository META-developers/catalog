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
import { CatalogCategoryService } from "../catalogCategory.service";
import { CatalogCategoryCreateInput } from "./CatalogCategoryCreateInput";
import { CatalogCategoryWhereInput } from "./CatalogCategoryWhereInput";
import { CatalogCategoryWhereUniqueInput } from "./CatalogCategoryWhereUniqueInput";
import { CatalogCategoryFindManyArgs } from "./CatalogCategoryFindManyArgs";
import { CatalogCategoryUpdateInput } from "./CatalogCategoryUpdateInput";
import { CatalogCategory } from "./CatalogCategory";
import { CatalogFindManyArgs } from "../../catalog/base/CatalogFindManyArgs";
import { Catalog } from "../../catalog/base/Catalog";
import { CatalogWhereUniqueInput } from "../../catalog/base/CatalogWhereUniqueInput";
import { CatalogItemFindManyArgs } from "../../catalogItem/base/CatalogItemFindManyArgs";
import { CatalogItem } from "../../catalogItem/base/CatalogItem";
import { CatalogItemWhereUniqueInput } from "../../catalogItem/base/CatalogItemWhereUniqueInput";

export class CatalogCategoryControllerBase {
  constructor(protected readonly service: CatalogCategoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CatalogCategory })
  async create(
    @common.Body() data: CatalogCategoryCreateInput
  ): Promise<CatalogCategory> {
    return await this.service.create({
      data: {
        ...data,

        merchant: {
          connect: data.merchant,
        },
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CatalogCategory] })
  @ApiNestedQuery(CatalogCategoryFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<CatalogCategory[]> {
    const args = plainToClass(CatalogCategoryFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CatalogCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CatalogCategoryWhereUniqueInput
  ): Promise<CatalogCategory | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CatalogCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CatalogCategoryWhereUniqueInput,
    @common.Body() data: CatalogCategoryUpdateInput
  ): Promise<CatalogCategory | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          merchant: {
            connect: data.merchant,
          },
        },
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
  @swagger.ApiOkResponse({ type: CatalogCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CatalogCategoryWhereUniqueInput
  ): Promise<CatalogCategory | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/catalog")
  @ApiNestedQuery(CatalogFindManyArgs)
  async findManyCatalog(
    @common.Req() request: Request,
    @common.Param() params: CatalogCategoryWhereUniqueInput
  ): Promise<Catalog[]> {
    const query = plainToClass(CatalogFindManyArgs, request.query);
    const results = await this.service.findCatalog(params.id, {
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

  @common.Post("/:id/catalog")
  async connectCatalog(
    @common.Param() params: CatalogCategoryWhereUniqueInput,
    @common.Body() body: CatalogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalog: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/catalog")
  async updateCatalog(
    @common.Param() params: CatalogCategoryWhereUniqueInput,
    @common.Body() body: CatalogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalog: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/catalog")
  async disconnectCatalog(
    @common.Param() params: CatalogCategoryWhereUniqueInput,
    @common.Body() body: CatalogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      catalog: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/items")
  @ApiNestedQuery(CatalogItemFindManyArgs)
  async findManyItems(
    @common.Req() request: Request,
    @common.Param() params: CatalogCategoryWhereUniqueInput
  ): Promise<CatalogItem[]> {
    const query = plainToClass(CatalogItemFindManyArgs, request.query);
    const results = await this.service.findItems(params.id, {
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

  @common.Post("/:id/items")
  async connectItems(
    @common.Param() params: CatalogCategoryWhereUniqueInput,
    @common.Body() body: CatalogItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/items")
  async updateItems(
    @common.Param() params: CatalogCategoryWhereUniqueInput,
    @common.Body() body: CatalogItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/items")
  async disconnectItems(
    @common.Param() params: CatalogCategoryWhereUniqueInput,
    @common.Body() body: CatalogItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
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
