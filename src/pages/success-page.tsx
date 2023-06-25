import React from 'react';
import App from "../App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "../context";

const container = document.getElementById("app");
// const root = createRoot(container);

const SuccessPage = () => {
  return (  
    <>
      <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
    </>
  );
};

export default SuccessPage;