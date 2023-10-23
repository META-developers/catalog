import { Module } from "@nestjs/common";
import { MerchantModuleBase } from "./base/merchant.module.base";
import { MerchantService } from "./merchant.service";
import { MerchantController } from "./merchant.controller";

@Module({
  imports: [MerchantModuleBase],
  controllers: [MerchantController],
  providers: [MerchantService],
  exports: [MerchantService],
})
export class MerchantModule {}
