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
import { CatalogService } from "../catalog.service";
import { CatalogCreateInput } from "./CatalogCreateInput";
import { CatalogWhereInput } from "./CatalogWhereInput";
import { CatalogWhereUniqueInput } from "./CatalogWhereUniqueInput";
import { CatalogFindManyArgs } from "./CatalogFindManyArgs";
import { CatalogUpdateInput } from "./CatalogUpdateInput";
import { Catalog } from "./Catalog";
import { CatalogCategoryFindManyArgs } from "../../catalogCategory/base/CatalogCategoryFindManyArgs";
import { CatalogCategory } from "../../catalogCategory/base/CatalogCategory";
import { CatalogCategoryWhereUniqueInput } from "../../catalogCategory/base/CatalogCategoryWhereUniqueInput";
import { CatalogScheduleFindManyArgs } from "../../catalogSchedule/base/CatalogScheduleFindManyArgs";
import { CatalogSchedule } from "../../catalogSchedule/base/CatalogSchedule";
import { CatalogScheduleWhereUniqueInput } from "../../catalogSchedule/base/CatalogScheduleWhereUniqueInput";

export class CatalogControllerBase {
  constructor(protected readonly service: CatalogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Catalog })
  async create(@common.Body() data: CatalogCreateInput): Promise<Catalog> {
    return await this.service.create({
      data: {
        ...data,

        merchant: {
          connect: data.merchant,
        },
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Catalog] })
  @ApiNestedQuery(CatalogFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Catalog[]> {
    const args = plainToClass(CatalogFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Catalog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CatalogWhereUniqueInput
  ): Promise<Catalog | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Catalog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() data: CatalogUpdateInput
  ): Promise<Catalog | null> {
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
  @swagger.ApiOkResponse({ type: Catalog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CatalogWhereUniqueInput
  ): Promise<Catalog | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/categories")
  @ApiNestedQuery(CatalogCategoryFindManyArgs)
  async findManyCategories(
    @common.Req() request: Request,
    @common.Param() params: CatalogWhereUniqueInput
  ): Promise<CatalogCategory[]> {
    const query = plainToClass(CatalogCategoryFindManyArgs, request.query);
    const results = await this.service.findCategories(params.id, {
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

  @common.Post("/:id/categories")
  async connectCategories(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() body: CatalogCategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/categories")
  async updateCategories(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() body: CatalogCategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/categories")
  async disconnectCategories(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() body: CatalogCategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/schedule")
  @ApiNestedQuery(CatalogScheduleFindManyArgs)
  async findManySchedule(
    @common.Req() request: Request,
    @common.Param() params: CatalogWhereUniqueInput
  ): Promise<CatalogSchedule[]> {
    const query = plainToClass(CatalogScheduleFindManyArgs, request.query);
    const results = await this.service.findSchedule(params.id, {
      ...query,
      select: {
        catalog: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        day: true,
        enabled: true,
        id: true,
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

  @common.Post("/:id/schedule")
  async connectSchedule(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() body: CatalogScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/schedule")
  async updateSchedule(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() body: CatalogScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/schedule")
  async disconnectSchedule(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() body: CatalogScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      schedule: {
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
