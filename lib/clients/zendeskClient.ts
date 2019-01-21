import {stringify} from 'query-string';
import {DEFAULT_API_BASE} from '../index';
import {Client} from './client';

interface ZendeskApiClient {
  request(options: object): Promise<object|null>;
}

class ZendeskClient implements Client {
  private readonly zendesk: ZendeskApiClient;
  private readonly token: string;
  private readonly baseUrl: string;

  constructor(
      zendesk: ZendeskApiClient, token: string, baseUrl = DEFAULT_API_BASE) {
    this.zendesk = zendesk;
    this.token = token;
    this.baseUrl = baseUrl;
  }

  async request(method: string, url: string, data: object = {}, secure = false):
      Promise<object> {
    if (method === 'get') {
      const getUrl = this.baseUrl + url + '?' +
          stringify(Object.assign({token: this.token}, data), {encode: false});

      return this.zendesk.request({type: method, url: getUrl, secure})
          .then((response) => {
            return response || {};
          });
    }

    return this.zendesk
        .request({
          type: method,
          url: this.baseUrl + url,
          data: Object.assign({token: this.token}, data),
          secure
        })
        .then((response) => {
          return response || {};
        });
  }
}

export {ZendeskClient};
