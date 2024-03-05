import axiosClient from '../configuration/axiosConfig'
import { AlbumModel } from '../models/AlbumModel'
import { AxiosResponse } from 'axios'


class AlbumsService {
    static getAlbums() {
        return axiosClient.get<AlbumModel[]>(`/albums`)
            .then((resp: AxiosResponse<AlbumModel[]>) => {
                return resp.data;
        })
    }
}

export default AlbumsService