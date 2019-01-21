import {HttpMethod} from '../api';

interface Client {
  request(method: HttpMethod, url: string, data: object, secure?: boolean):
      Promise<object>;
}

export {HttpMethod, Client};
