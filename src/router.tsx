import { createHashRouter, Outlet } from "react-router-dom";
import Layout from "./components/layout";
import Private from "./components/private-route";
import AuthPage from "./pages/auth-page";
import HomePage from "./pages/home-page";
import SampleSearchPage from "./pages/sample-search-page";
import SearchPage from "./pages/search-page";

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
        path: "/sample-search",
        element: <SampleSearchPage />,
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
