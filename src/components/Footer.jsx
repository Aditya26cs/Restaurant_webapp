
import {useContext} from "react";
import userContext  from "../utils/createContext";
const Footer = () => {
  
  const {user} = useContext(userContext);

    return (
      <div className="border m-6 p-2 flex justify-between bg-blue-200"> 
       <p>Copyright 2023</p>
       <h2>{"made by " + user.name + " with love"}</h2>
       </div>
  )
  };
 
export default Footer;