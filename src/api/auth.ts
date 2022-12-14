import axios, {AxiosResponse} from "axios";
import {ResponseType} from "./responseTypes";

export type LoginType = {
    email: string,
    password: string,
    rememberMe?: boolean
}

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '4f75b79d-af09-4141-9f0e-f229ac4ac21f'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.1/'
})

export const auth = {
    isAuth() {
        return instance.get<null, AxiosResponse<ResponseType<{ email: string, id: number, login: string }>>>('/auth/me/')
    },
    login(payload: LoginType) {
        return instance.post<{ payload: LoginType },
            AxiosResponse<ResponseType<{ userId: number }>>>('/auth/login/',
            {...payload})
    },
    logout() {
        return instance.delete<null, AxiosResponse<ResponseType<null>>>('/auth/login/')
    }
}