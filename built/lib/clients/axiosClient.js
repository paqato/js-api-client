import axios from 'axios';
import { DEFAULT_API_BASE } from '../index';
class AxiosClient {
    constructor(token, baseUrl = DEFAULT_API_BASE) {
        this.axios = axios.create({ params: { token }, baseURL: baseUrl });
    }
    async request(method, url, data = {}) {
        return this.axios.request({ method, url, data }).then((response) => {
            return response.data || {};
        });
    }
}
export { AxiosClient };
//# sourceMappingURL=axiosClient.js.map