import { useEffect } from "react";
import { Routes as RouterRoutes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import AgGrid from "./pages/AgGrid";
import Detail from "./pages/Detail";
import Content from "./pages/Content";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  const location = useLocation();
  useEffect(() => {}, [location.pathname]);

  const routeList = [
    { label: "main", link: "/", element: <Main /> },
    { label: "grid", link: "/grid", element: <AgGrid /> },
    { label: "detail", link: "/detail", element: <Detail /> },
    { label: "content", link: "/content", element: <Content /> },
    { label: "notfound", link: "*", element: <NotFound /> },
  ];

  return (
    <RouterRoutes>
      {routeList.map((route) => (
        <Route key={route.label} path={route.link} element={route.element} />
      ))}
    </RouterRoutes>
  );
}
