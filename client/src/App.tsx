import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App