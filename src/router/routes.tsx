import React from "react";
import { AppRoutes } from "../utils";
import { Home } from "../Pages/Home";
import { Login, Register } from "../Pages/Auth";

interface route {
  path: String;
  component: JSX.Element;
  auth?: Boolean | undefined | null;
}

export const routes: route[] = [
  // unauthenticated routes
  { path: AppRoutes.LOGIN, component: <Login /> },
  { path: AppRoutes.REGISTER, component: <Register /> },

  // user routes
  { path: AppRoutes.HOME, component: <Home />, auth: true },

  /* You can define your own object keys and maipulate your app how you see fit*/

  // { path: AppRoutes.HOME, component: <UserAccount />, auth: true },
];
