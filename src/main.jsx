import React from "react";
import ReactDOM from "react-dom/client";
import "./app/providers/i18n";
import AppRouter from "./app/router";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
    <HelmetProvider>
        <AppRouter />
    </HelmetProvider>
);