import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
// import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UploadsController],
  //   providers: [ConfigService],
})
export class UploadsModule {}
