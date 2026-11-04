
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./componants/Header.jsx"
import Footer from "./componants/Footer.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          transition={Bounce}
        />

        <Header />

        <div className="flex-1 pt-20">
          <App />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
