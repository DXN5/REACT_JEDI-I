import axiosClient from '../configuration/axiosConfig'
import PostModel from '../models/PostModel'
import { AxiosResponse } from 'axios'


class PostService {
    static getPosts() {
        return axiosClient.get<PostModel[]>('/posts')
            .then((response: AxiosResponse<PostModel[]>) => {
                return response.data
            })
    }

    static getPostById(id: string | undefined) {
        return axiosClient.get<PostModel>(`/posts/${id}`)
            .then((resp: AxiosResponse<PostModel>) => {
                return resp.data;
        })
    }
}

export default PostService