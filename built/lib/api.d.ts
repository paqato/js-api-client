import { Client } from './clients/client';
import { Packages } from './resources/packages';
declare enum HttpMethod {
    GET = "get",
    HEAD = "head",
    POST = "post",
    PUT = "put",
    DELETE = "delete",
    CONNECT = "connect",
    OPTIONS = "options",
    TRACE = "trace",
    PATCH = "patch"
}
declare class Api {
    private client;
    packages: Packages;
    constructor(client: Client);
    request(method: HttpMethod, url: string, data?: object, secure?: boolean): Promise<object>;
}
export { HttpMethod, Api };
