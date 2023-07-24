import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import BookForm from "../components/ui/BookForm";
import BookDetails from "../pages/BookDetails";
import EditBook from "../pages/EditBook";
import WishList from "../pages/WishList";
import CurrentlyReading from "../pages/CurrentlyReading";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // element: <Home />,
        element: (
          <PrivateRoute>
            <Home />,
          </PrivateRoute>
        ),
      },
      {
        path: "/add-new-book",
        element: (
          <PrivateRoute>
            <BookForm></BookForm>,
          </PrivateRoute>
        ),
      },
      {
        path: "/book-detail/:id",
        element: <BookDetails />,
      },
      {
        path: "/show-wishlist",
        element: <WishList />,
      },
      {
        path: "/currently-read",
        element: <CurrentlyReading />,
      },
      {
        path: "/edit-book/:id",
        element: (
          <PrivateRoute>
            <EditBook />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default routes;
