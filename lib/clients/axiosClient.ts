import axios, {AxiosInstance} from 'axios';

import {DEFAULT_API_BASE} from '../index';

import {Client} from './client';

class AxiosClient implements Client {
  private readonly axios: AxiosInstance;

  constructor(token: string, baseUrl = DEFAULT_API_BASE) {
    this.axios = axios.create({params: {token}, baseURL: baseUrl});
  }

  async request(method: string, url: string, data: object = {}):
      Promise<object> {
    return this.axios.request({method, url, data}).then((response) => {
      return response.data || {};
    });
  }
}

export {AxiosClient};
