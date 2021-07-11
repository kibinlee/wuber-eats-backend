import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as AWS from 'aws-sdk';

@Controller('uploads')
export class UploadsController {
  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    AWS.config.update({
      credentials: {
        accessKeyId: process.env.S3_ACCESSKEY_ID,
        secretAccessKey: process.env.S3_ACCESS_SECRET,
      },
    });
    try {
      const objectName = `${Date.now() + file.originalname}`;
      await new AWS.S3()
        .putObject({
          Body: file.buffer,
          Bucket: process.env.BUCKET_NAME,
          Key: objectName,
          ACL: 'public-read',
        })
        .promise();
      const url = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${objectName}`;
      return { url };
    } catch (e) {
      return null;
    }
  }
}
