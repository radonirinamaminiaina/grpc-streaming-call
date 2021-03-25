import { GrpcOptions, Transport } from '@nestjs/microservices';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = '../../../config/grpc.yml';

interface PackageConfig {
  url: string;
  protoPathServer: string;
  protoPathClient: string;
  package: string;
  name: string;
}
export interface GrpcConfiguration {
  [key: string]: PackageConfig;
}

export const grpcConfiguration = () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};

export const grpcTransport = (
  key: string,
  type: 'client' | 'server' = 'server',
): GrpcOptions => {
  const config: PackageConfig = grpcConfiguration()[key];
  return {
    ...(type === 'client' ? { name: config.name } : {}),
    transport: Transport.GRPC,
    options: {
      url: config.url,
      package: config.package,
      protoPath: join(
        __dirname,
        config[type === 'client' ? 'protoPathClient' : 'protoPathServer'],
      ),
    },
  };
};
