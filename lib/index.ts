import {Api} from './api';
import {Client} from './clients/client';

export function api(client: Client): Api {
  return new Api(client);
}

export const DEFAULT_API_BASE = 'https://api.paqato.com/v2';
