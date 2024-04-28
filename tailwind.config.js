import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                xs: "380px",
            },
            colors: {
                "dark-gray": "#222831",
                "light-gray": "#31363F",
            },
        },
    },

    plugins: [forms, require("daisyui")],
    darkMode: "class",
};
