import { Link } from "react-router-dom";
import userContext from "../utils/createContext";
import { useContext } from "react";

 
// React Router Links: When you click a Link from React Router, it only updates the part of the page that needs to change. It doesn’t reload everything.

// No Full Page Reload: The use of the Link component prevents a full page reload. Instead, React Router intercepts the click event and changes the URL in the browser's address bar. React then re-renders the necessary components to reflect the new route, creating a smoother user experience.

const RestaurantCards = ({ name, cuisines, rating, image , id  }) => {

// console.log("User in RestaurantCards:", user);
const {user} = useContext(userContext);

return (

   

    <Link to={`/restaurant/${id}`}> 

     <div className="card w-48 h-72 border mx-6 p-2  rounded  transition ease-in-out delay-150  hover:scale-110
     hover:shadow-2xl border-gray-400">  
      <img src={image} alt={name} className="w-48 h-36"/>
        <div className="m-1 p-3">
        <h2>{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{rating}</h4> 
        <h4>{user.name}</h4>
        </div>
     </div>
     
    </Link> 
  );
};

export default RestaurantCards;
