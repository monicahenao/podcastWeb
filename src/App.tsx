import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import { Footer, Header } from "./components/organisms";

function App() {
  return (
    <>
      <Header />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      <Footer />
    </>
  );
}

export default App;
