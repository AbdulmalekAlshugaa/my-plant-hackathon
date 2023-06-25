import { create } from "apisauce";
import { getAuthData } from "../helper/localStorage";

const headers = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Accept': 'application/json',

}

const apiClient = create({
    baseURL: 'http://52.76.68.49/casia',
    headers: headers,
    timeout: 30000,
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await getAuthData();
    if (!authToken) return;
    request.headers["api_token"] = authToken;
});

const authClient = create({
    baseURL: 'http://eweebo-001-site1.etempurl.com/api',
    headers: headers,
    timeout: 30000,
});

export default {
    apiClient,
    authClient
}
