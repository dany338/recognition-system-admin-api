import { existsSync } from 'fs';
import { join } from 'path';

import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class FilesService {
  getStaticClientImage(imageName: string) {
    const path = join(__dirname, '../../static/clients', imageName);

    if (!existsSync(path))
      throw new BadRequestException(`No client found with image ${imageName}`);

    return path;
  }
}
