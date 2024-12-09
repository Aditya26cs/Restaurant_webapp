import { createContext } from "react"

const userContext =  createContext({
    user:{
       name : "aditya",
       email: "aditya123@gmail"
    },
});

export default userContext;

// The createContext function is used to create a Context object.