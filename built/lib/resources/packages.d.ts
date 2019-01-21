import { Api } from '../api';
import { Resource } from './resource';
declare class Packages implements Resource {
    private readonly api;
    constructor(api: Api);
    get(trackingCode: string, zipCode: string, orderNumber?: string | null, language?: string | null, secure?: boolean): Promise<object>;
    forCustomer(email: string, limit?: number, secure?: boolean): Promise<object>;
}
export { Packages };
