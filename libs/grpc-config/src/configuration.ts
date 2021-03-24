import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = '../../../config/grpc.yml';

export interface GrpcConfiguration {
  [key: string]: {
    host: string;
    protoPathServer: string;
    protoPathClient: string;
    package: string;
    name: string;
  };
}

export const grpcConfiguration = () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};
