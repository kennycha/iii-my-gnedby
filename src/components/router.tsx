import { createHashRouter, Outlet } from "react-router-dom";
import AuthPage from "./auth-page";
import HomePage from "./home-page";
import Layout from "./layout";
import Private from "./private-route";
import SearchPage from "./search-page";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/",
        element: (
          <Private>
            <Outlet />
          </Private>
        ),
        children: [
          {
            path: "/search",
            element: <SearchPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
