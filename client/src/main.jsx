import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { AuthContextProvider } from "./context/auth.context.jsx";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3bd16f",
            light: "#74e39a",
            dark: "#01b636",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
