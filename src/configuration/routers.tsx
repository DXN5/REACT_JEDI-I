import {
    createBrowserRouter,
  } from "react-router-dom";
import Posts from "../components/post/Posts";
import PostDetail from '../components/post/PostDetail'

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello</div>,
    },
    {
      path: '/posts',
      element: <Posts />
    },
    {
      path: 'post/:id',
      element: <PostDetail />
    }
  ]);

  export default routers;