import React, { Suspense, Fragment, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Guest from './component/Guest';
import BaseLayout from "./layout/BaseLayout/BaseLayout/Layout";
import SidebarLayout from "./layout/BaseLayout/SideBarLayout/index";
import login from "./component/login";
import presentation from "./component/presentation";
import landingPage from "./component/landingPage";
// import SidebarLayout from './layouts/SidebarLayout'
// import SidebarLayoutTeacher from './layouts/sidebarLayoutsTeacher'

// import CircularProgress from '@mui/material/CircularProgress';

export function RenderRout() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Please wait</div>}>
          <Routes>
            {routes().map((route, i) => {
              //   const Guard = route.guard || Fragment;
              const Layout = route?.layout || Fragment;
              const Component = route?.element;
              return (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  element={
                    // <Guard>
                    <Layout>
                      <Component />
                    </Layout>
                    // </Guard>
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

const routes = () => {
  return [
    {
      layout: BaseLayout,
      // guard: Guest,
      exact: true,
      path: "/",
      element: lazy(() => import("./component/login")),
    },
    {
      layout: SidebarLayout,
      // guard: Guest,
      exact: true,
      path: "/import",
      element: lazy(() => import("./component/import")),
    },
    // {
    //   // layout: SidebarLayout,
    //   // guard: Guest,
    //   exact: true,
    //   path: "/",
    //   element: lazy(() => import("./component/landingPage")),
    // },
    {
      layout: BaseLayout,
      // guard: Guest,
      exact: true,
      path: "/ppt1",
      element: lazy(() => import("./component/DemoView")),
    },
    {
      layout: SidebarLayout,
      // guard: Guest,
      exact: true,
      path: "/drag",
      element: lazy(() => import("./component/Drag")),
    },
    {
      layout: BaseLayout,
      // guard: Guest,
      exact: true,
      path: "/presentation",
      element: lazy(() => import("./component/presentation")),
    },
  ];
};
