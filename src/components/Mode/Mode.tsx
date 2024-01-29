import { useEffect, useState } from "react";

export const useMode = () => {
    const [theme, setTheme] = useState(
        sessionStorage.getItem("portfolio_theme") || "light",
    );

    if (theme === "light") {
        let html = document.getElementsByTagName("html")[0];
        html.classList.add("light");
    }

    const toggleLightDarkTheme = () => {
        let html = document.getElementsByTagName("html")[0];
        if (theme === "light") {
            sessionStorage.setItem("portfolio_theme", "dark");
            setTheme("dark");
            html.classList.remove("light");
        } else {
            sessionStorage.setItem("portfolio_theme", "light");
            setTheme("light");
            html.classList.add("light");
        }
    };
    useEffect(() => {
        const sessionTheme = window.sessionStorage.getItem("theme");
        sessionTheme && setTheme(sessionTheme);
    }, []);

    return { theme, toggleLightDarkTheme };
};
