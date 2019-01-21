import { stringify } from 'query-string';
import { DEFAULT_API_BASE } from '../index';
class ZendeskClient {
    constructor(zendesk, token, baseUrl = DEFAULT_API_BASE) {
        this.zendesk = zendesk;
        this.token = token;
        this.baseUrl = baseUrl;
    }
    async request(method, url, data = {}, secure = false) {
        if (method === 'get') {
            const getUrl = this.baseUrl + url + '?' +
                stringify(Object.assign({ token: this.token }, data), { encode: false });
            return this.zendesk.request({ type: method, url: getUrl, secure })
                .then((response) => {
                return response || {};
            });
        }
        return this.zendesk
            .request({
            type: method,
            url: this.baseUrl + url,
            data: Object.assign({ token: this.token }, data),
            secure
        })
            .then((response) => {
            return response || {};
        });
    }
}
export { ZendeskClient };
//# sourceMappingURL=zendeskClient.js.map