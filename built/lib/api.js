import { Packages } from './resources/packages';
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "get";
    HttpMethod["HEAD"] = "head";
    HttpMethod["POST"] = "post";
    HttpMethod["PUT"] = "put";
    HttpMethod["DELETE"] = "delete";
    HttpMethod["CONNECT"] = "connect";
    HttpMethod["OPTIONS"] = "options";
    HttpMethod["TRACE"] = "trace";
    HttpMethod["PATCH"] = "patch";
})(HttpMethod || (HttpMethod = {}));
class Api {
    constructor(client) {
        this.client = client;
        this.packages = new Packages(this);
    }
    request(method, url, data = {}, secure) {
        return this.client.request(method, url, data, secure);
    }
}
export { HttpMethod, Api };
//# sourceMappingURL=api.js.map