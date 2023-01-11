import React from "react";
import { UserProvider } from "contexts/UserContext";
import { MainRoutes as Routes } from "routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

export function App () {
  return (
    <>
    <UserProvider>
        <Routes />
    </UserProvider>
    <ToastContainer
    position="bottom-left"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    </>
  );
}
