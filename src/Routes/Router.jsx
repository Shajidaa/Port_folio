import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default router;
