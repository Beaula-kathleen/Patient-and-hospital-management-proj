import Home from "../pages/Home";
import Specialist from "../pages/Specialist";
import Specialty from "../pages/Specialty";

export const routeItems = [
  { path: "/", element: <Home /> },
  { path: "/specialty", element: <Specialty /> },
  {
    path: "/spec",
    element: <Specialist />,
  },
];
