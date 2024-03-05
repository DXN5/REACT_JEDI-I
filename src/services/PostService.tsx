import axiosClient from '../configuration/axiosConfig'
import { PostModel, PostQueryModel } from '../models/PostModel'
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

    static createPost(values: PostQueryModel) {
        return axiosClient.post<PostModel>(`/posts`, {
            title: values.title,
            body: values.body,
            userId: +(new Date()), 
        })
    }

    static changePost(id: string | undefined, values: PostQueryModel) {
        return axiosClient.patch<PostModel>(`/posts/${id}`, {
            title: values.title,
            body: values.body,
        }).then((res) => res && PostService.getPostById(id))
    }

    static deletePost(id: string | undefined) {
        axiosClient.delete<PostModel>(`/posts/${id}`)
    }

}

export default PostService