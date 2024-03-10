import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home'
import PostDetail from './Pages/PostDetail'
import Register from './Pages/Register'
import Login from './Pages/Login'
import UserProfile from './Pages/UserProfile'
import Author from './Pages/Authors'
import CreatePost from './Pages/CreatePost'
import EditPost from './Pages/EditPost'
import DeletePost from './Pages/DeletePost'
import CategoryPosts from './Pages/CategoryPosts'
import AuthorPost from './Pages/AuthorPosts'
import Dashboard from './Pages/Dashboard'
import Logout from './Pages/Logout'
import Settings from './Pages/Settings'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home/> },
      { path: "posts/:id", element: <PostDetail/>},
      { path: "register", element: <Register/>},
      { path: "login", element: <Login/>},
      { path: "profile/:id", element: <UserProfile/>},
      { path: "authors", element: <Author/>},
      { path: "create", element: <CreatePost/>},
      { path: "posts/categories/:category", element: <CategoryPosts/>},
      { path: "posts/users/:id", element: <AuthorPost/>},
      { path: "myposts/:id", element: <Dashboard/>},
      { path: "posts/:id/edit", element: <EditPost/>},
      { path: "posts/:id/delete", element: <DeletePost/>},
      { path: "setting", element: <Settings/>},
      { path: "logout", element: <Logout/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


