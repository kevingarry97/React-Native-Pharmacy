import { create } from 'apisauce';
import authStorage from '../auth/storage';

const apiClient = create({
    baseURL: 'https://pure-garden-52091.herokuapp.com/api'
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if(!authToken) return;

    request.headers['Authorization'] = 'Bearer ' + authToken;
});

export default apiClient