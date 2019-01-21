import { Client } from './client';
interface ZendeskApiClient {
    request(options: object): Promise<object | null>;
}
declare class ZendeskClient implements Client {
    private readonly zendesk;
    private readonly token;
    private readonly baseUrl;
    constructor(zendesk: ZendeskApiClient, token: string, baseUrl?: string);
    request(method: string, url: string, data?: object, secure?: boolean): Promise<object>;
}
export { ZendeskClient };
