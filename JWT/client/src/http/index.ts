import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {store} from "../index";
import {IUser} from "../models/IUser";

export const API_URL = `http://localhost:5000/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

//интерцептор на запрос
$api.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

// интерцептор на ответ с двумя параметрами, интересен второй
// т.е. мы отправили запрос на получение пользователей, получили 401, перезаписали токен и опять повторили запрос на получение пользователей
$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    // проверка от вечного цикла, чтобы не было вечного refresh (error.config существует и поле _isRetry !== true)
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            // обращаемся к инстансу нашего axios, вызываем функцию request и туда передаем originalRequest (хранит все данные для запроса)
            return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    // если не 401
    throw error;
})

export default $api;