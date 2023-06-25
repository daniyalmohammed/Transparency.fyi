import React from 'react';
import { useState, useEffect } from 'react';
import App from "../App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "../context";

// const container = document.getElementById("app");
// const root = createRoot(container);

function RedirectExample() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://codefrontend.com');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return <>Will redirect in 3 seconds...</>;
}

const SuccessPage = () => {
  RedirectExample();
  return (  
    <div>
      {/* <App /> */}
    </div>
  //   <>
  //     <BrowserRouter>
  //   <MaterialUIControllerProvider>
  //     <App />
  //   </MaterialUIControllerProvider>
  // </BrowserRouter>
  //   </>
  );
};

export default SuccessPage;