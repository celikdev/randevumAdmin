import { Home, Login, Users } from "./screens";

export const route = [
  {
    element: <Login />,
    path: "/",
  },
  {
    element: <Home />,
    path: "/dashboard",
  },
  {
    element: <Users />,
    path: "/dashboard/users",
  },
];
