import axiosClient from '../configuration/axiosConfig'
import { PhotoModel } from '../models/PhotoModel'
import { AxiosResponse } from 'axios'


class PhotoService {
    static getPhotos() {
        return axiosClient.get<PhotoModel[]>(`/photos`)
            .then((resp: AxiosResponse<PhotoModel[]>) => {
                return resp.data;
        })
    }
}

export default PhotoService