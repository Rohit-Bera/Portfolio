import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Work from "./components/Work";
import Service from "./components/Service";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import ContactMe from "./components/ContactMe";
import About from "./components/About";
// inspiration
// https://dribbble.com/shots/21428580-Daniasyrofi-Personal-Portfolio-Landing-Page
// https://dribbble.com/shots/21502354-Daniasyrofi-Personal-Portfolio-Landing-Page-Responsive

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutMe",
      element: <About />,
    },
    {
      path: "/serviceIprovide",
      element: <Service />,
    },
    {
      path: "/projectsIdid",
      element: <Work />,
    },
    {
      path: "/contactme",
      element: <ContactMe />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
