import {Api, HttpMethod} from '../api';

import {Resource} from './resource';

type GetParams = {
  orderNumber?: string;
  language?: string;
};

class Packages implements Resource {
  private readonly api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  get(trackingCode: string, zipCode: string, orderNumber: string|null = null,
      language: string|null = null, secure = true) {
    const params: GetParams = {};

    if (orderNumber !== null) {
      params['orderNumber'] = orderNumber;
    }

    if (language !== null) {
      params['language'] = language;
    }

    return this.api.request(
        HttpMethod.GET, '/package/' + trackingCode + '/' + zipCode, params,
        secure);
  }

  forCustomer(email: string, limit = 5, secure = true) {
    return this.api.request(
        HttpMethod.GET, '/package/for-customer/' + email, {limit}, secure);
  }
}

export {Packages};
