import {
    createBrowserRouter,
  } from "react-router-dom";
import Posts from "../components/post/Posts";
import PostDetail from '../components/post/PostDetail'
import Main from "../components/main_page/Main";
import PostComments from "../components/comment/Comments";
import PostCreate from "../components/post/PostCreate";
import Albums from "../components/album/Albums";
import Photos from "../components/photo/Photos";

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/posts",
      element: <Posts />
    },
    {
      path: "post/:id",
      element: <PostDetail />
    },
    {
      path: "post/:id/comments",
      element: <PostComments />
    },
    {
      path: "post/create",
      element: <PostCreate />      
    },
    {
      path: "/albums",
      element: <Albums />
    },
    {
      path: "/album/photos",
      element: <Photos />
    }    
  ]);

  export default routers;