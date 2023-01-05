import { UserProvider } from "contexts/UserContext";
import { MainRoutes as Routes } from "routes/MainRoutes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Register } from "pages/Register/Register";

export function App() {
  return (
    <UserProvider>
      <Register></Register>
    </UserProvider>
  );
}
