import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { DarkModeProvider } from "./Contexts/DarkMode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const appName = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <DarkModeProvider>
                <App {...props} />
                <ToastContainer
                    theme="light"
                    position="bottom-right"
                    style={{ width: "fit-content" }}
                />
            </DarkModeProvider>
        );
    },
    progress: {
        color: "#DB1328",
    },
});
