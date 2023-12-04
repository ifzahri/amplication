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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ChatService } from "../chat.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChatCreateInput } from "./ChatCreateInput";
import { ChatWhereInput } from "./ChatWhereInput";
import { ChatWhereUniqueInput } from "./ChatWhereUniqueInput";
import { ChatFindManyArgs } from "./ChatFindManyArgs";
import { ChatUpdateInput } from "./ChatUpdateInput";
import { Chat } from "./Chat";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChatControllerBase {
  constructor(
    protected readonly service: ChatService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Chat })
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ChatCreateInput): Promise<Chat> {
    return await this.service.create({
      data: data,
      select: {
        content: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        usersTo: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Chat] })
  @ApiNestedQuery(ChatFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Chat[]> {
    const args = plainToClass(ChatFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        usersTo: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Chat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ChatWhereUniqueInput
  ): Promise<Chat | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        usersTo: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Chat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ChatWhereUniqueInput,
    @common.Body() data: ChatUpdateInput
  ): Promise<Chat | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          id: true,
          updatedAt: true,
          usersTo: true,
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
  @swagger.ApiOkResponse({ type: Chat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ChatWhereUniqueInput
  ): Promise<Chat | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          updatedAt: true,
          usersTo: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/usersFrom")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findManyUsersFrom(
    @common.Req() request: Request,
    @common.Param() params: ChatWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsersFrom(params.id, {
      ...query,
      select: {
        channels: {
          select: {
            id: true,
          },
        },

        chat: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/usersFrom")
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "update",
    possession: "any",
  })
  async connectUsersFrom(
    @common.Param() params: ChatWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersFrom: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/usersFrom")
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "update",
    possession: "any",
  })
  async updateUsersFrom(
    @common.Param() params: ChatWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersFrom: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/usersFrom")
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "update",
    possession: "any",
  })
  async disconnectUsersFrom(
    @common.Param() params: ChatWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usersFrom: {
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
