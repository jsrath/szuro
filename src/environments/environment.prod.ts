import { config } from '../../secret'

export const environment = {
  production: true,
  apiUrl: config.url,
  prefix: config.prefix
};
