import LoginRegister from "./pages/LoginRegister/LoginRegister";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Salary from "./pages/Salary";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/salary",
        element: <Salary />,
      },
    ],
  },
  {
    path: "/login-register",
    element: <LoginRegister />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
