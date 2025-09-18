import React, { useEffect, useState } from 'react'

const Theme = () => {
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem("theme") || "light";
    });

    const [data, setdata] = useState({
            name:"Ali",
            age:25
        })

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        localStorage.setItem("user",JSON.stringify(data))
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    }

    const getCurrentTheme=()=>{
        const currentTheme= localStorage.getItem("user")
        console.log("user",JSON.parse(currentTheme).age);
    }
  // removeitem and clear()

    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                height: "70vh",
                padding: "20px",
            }}
        >
            <h2>Persisted Theme App</h2>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"}
            </button>
            <button onClick={getCurrentTheme}>
                Fetch Current Theme
            </button>
        </div>
    );
}

export default Theme