import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { MerchantModule } from "./merchant/merchant.module";
import { CatalogModule } from "./catalog/catalog.module";
import { CatalogScheduleModule } from "./catalogSchedule/catalogSchedule.module";
import { CatalogCategoryModule } from "./catalogCategory/catalogCategory.module";
import { CatalogItemModule } from "./catalogItem/catalogItem.module";
import { CatalogModifierGroupModule } from "./catalogModifierGroup/catalogModifierGroup.module";
import { CatalogItemModifierModule } from "./catalogItemModifier/catalogItemModifier.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    MerchantModule,
    CatalogModule,
    CatalogScheduleModule,
    CatalogCategoryModule,
    CatalogItemModule,
    CatalogModifierGroupModule,
    CatalogItemModifierModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
