import axiosClient from '../configuration/axiosConfig'
import { UserModel } from '../models/UserModel'
import { AxiosResponse } from 'axios'


class UserService {
    static getUsers() {
        return axiosClient.get<UserModel[]>(`/users`)
            .then((resp: AxiosResponse<UserModel[]>) => {
                return resp.data;
        })
    }
}

export default UserService