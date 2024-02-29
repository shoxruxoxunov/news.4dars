import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./layout/RouteLayout";
import Create from "./pages/Create";
// import News from "./pages/News";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RouteLayout />,
      children: [
        {
          index: true,
          element: "Home",
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
