export interface PostModel {
  id: number,
  title: string,
  body: string,
  userId: number
}

export interface PostQueryModel {
  title: string,
  body: string,
}