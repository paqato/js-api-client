import { HttpMethod } from '../api';
class Packages {
    constructor(api) {
        this.api = api;
    }
    get(trackingCode, zipCode, orderNumber = null, language = null, secure = true) {
        const params = {};
        if (orderNumber !== null) {
            params['orderNumber'] = orderNumber;
        }
        if (language !== null) {
            params['language'] = language;
        }
        return this.api.request(HttpMethod.GET, '/package/' + trackingCode + '/' + zipCode, params, secure);
    }
    forCustomer(email, limit = 5, secure = true) {
        return this.api.request(HttpMethod.GET, '/package/for-customer/' + email, { limit }, secure);
    }
}
export { Packages };
//# sourceMappingURL=packages.js.map