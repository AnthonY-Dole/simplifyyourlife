import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
const Loadable = (Component) => (props) => {
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <Component {...props} />
      </Suspense>
    </>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "shortner", element: <Shortner /> },
      ],
    },
  ]);
}

const Home = Loadable(lazy(() => import("../pages/Home")));
const Shortner = Loadable(lazy(() => import("../pages/ShortnerPage")));
