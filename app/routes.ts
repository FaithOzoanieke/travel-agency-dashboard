
import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route('dashboard', './routes/admin/dashboard.tsx'),
] satisfies RouteConfig;


// import {
//   type RouteConfig,
//   route,
//   index,
// } from "@react-router/dev/routes";

// export default [
//   // parent route
//   route("dashboard", "./routes/admin/dashboard.tsx", [
//     // child routes
//     // index("./home.tsx"),
//     // route("settings", "./settings.tsx"),
//   ]),
// ] satisfies RouteConfig;
