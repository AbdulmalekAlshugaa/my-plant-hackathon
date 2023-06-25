import api from "./client";


const createAccount = (userName: string, password: string, firstName: string, lastName: string, email: string) =>
    api.authClient.post(`/Auth/register`, { userName, password, firstName, lastName, email });


const loginUsingUserNameAndPassword = (userName: string, password: string) =>
    api.authClient.post(`/Auth/login`, { userName, password });


export default {
    loginUsingUserNameAndPassword,
    createAccount
}