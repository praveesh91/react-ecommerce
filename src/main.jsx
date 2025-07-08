import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css"; // Import CSS
import "./index.css";
import App from "./App.jsx";

import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer
import { store } from "./store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" />
  </Provider>
);
