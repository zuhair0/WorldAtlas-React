import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { About } from "./pages/About";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
