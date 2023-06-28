import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null))

    const login = async(inputs)=>{
        const instance = await axios.create({
            withCredentials: true,
            baseURL: 'https://api.ayhacademy.com',
            headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
            credentials: 'include'
        })
        const res = await instance.post("https://api.ayhacademy.com/api/auth/login/", inputs);
        setCurrentUser(res.data);
    }

    const logout = async(inputs)=>{
        await axios.post("https://api.ayhacademy.com/api/auth/logout");
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return(
        <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
    )
}