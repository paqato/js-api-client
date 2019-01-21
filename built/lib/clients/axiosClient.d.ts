import { Client } from './client';
declare class AxiosClient implements Client {
    private readonly axios;
    constructor(token: string, baseUrl?: string);
    request(method: string, url: string, data?: object): Promise<object>;
}
export { AxiosClient };
