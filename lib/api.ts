import {Client} from './clients/client';
import {Packages} from './resources/packages';

enum HttpMethod {
  GET = 'get',
  HEAD = 'head',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  CONNECT = 'connect',
  OPTIONS = 'options',
  TRACE = 'trace',
  PATCH = 'patch'
}

class Api {
  private client: Client;
  packages: Packages;

  constructor(client: Client) {
    this.client = client;

    this.packages = new Packages(this);
  }

  request(method: HttpMethod, url: string, data: object = {}, secure?: boolean):
      Promise<object> {
    return this.client.request(method, url, data, secure);
  }
}

export {HttpMethod, Api};
