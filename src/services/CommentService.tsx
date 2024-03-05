import axiosClient from '../configuration/axiosConfig'
import { CommentModel } from '../models/CommentModel'
import { AxiosResponse } from 'axios'


class CommentService {
    static getPostComments(id: string | undefined) {
        return axiosClient.get<CommentModel[]>(`/posts/${id}/comments`)
            .then((resp: AxiosResponse<CommentModel[]>) => {
                return resp.data;
        })
    }
}

export default CommentService