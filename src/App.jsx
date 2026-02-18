import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import ListsPage from "./pages/ListsPage/ListsPage";
import MoviePage from "./pages/MoviePage/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      { path: "/lists", element: <ListsPage /> },
      { path: `movie/:id`, element: <MoviePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
