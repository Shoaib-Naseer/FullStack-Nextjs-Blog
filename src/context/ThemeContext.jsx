'use client'

import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "dark"
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    })

    const toggle = () => {
        console.log(theme)
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}