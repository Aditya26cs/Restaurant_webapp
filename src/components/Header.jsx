import { useState  , useContext} from "react";
import { Link } from "react-router-dom";
import  userContext from "../utils/createContext";
import {useSelector} from "react-redux";


const Title = () => {
    return (
      <a href="/">
        <img
          className="h-20 w-20 rounded-lg"
          src="https://i.pinimg.com/736x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
          alt=""
        />
      </a>
    );
  };

 
  // to export a particular component use export before name and use {} while import it 
  const Header = () => {
     
  const {user} = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
      
     // useContext takes a Context object as its parameter
     // userContext stores  context object created by createContext function. 

    const [mode, setMode] = useState("white");
    const[textmode , settextmode] = useState("black");
    
                                                  
    document.body.style.backgroundColor = mode;
    document.body.style.color = textmode;


    const colorChanger = () => {

      if (mode === "white") {

        setMode("black");
        document.body.style.backgroundColor = mode;
        settextmode("white");
        document.body.style.color = textmode;
         
      } else {
        setMode("white");
        document.body.style.backgroundColor = mode;
        settextmode("black");
        document.body.style.color =  textmode;
      }
    };
    
 // spa :- single page application
 // client side routing :- Client-side routing is a method used in web applications where the navigation between pages happens without reloading the entire webpage. Instead of requesting a new HTML page from the server every time you click a link, the browser dynamically updates the content by changing the URL and rendering different components based on the route.

 // parcel help in dynamic loading , on demand loading  , chunking , code spliting

    return (

      <div className="header  flex justify-between border m-6 p-4 bg-blue-200 shadow">

        <Title />

        <div className="flex  justify-center items-center">
          <ul className="flex gap-5">
             
             <Link to= "/">
             <li>Home</li>
             </Link>
 
             <Link to="/about">
                <li>About</li>
             </Link>

             <Link to= "/contact">
              <li>Contact</li>
             </Link>

             <Link to= "/Instamart">
              <li>instamart</li>
             </Link>

             <Link to = "/cart">
                <li>Cart {cartItems.length}</li>
             </Link>
              
          </ul>
        </div>

        {<button  className="border border-black p-1 rounded m-0"
        onClick={() => colorChanger()}>toggle</button>}

        <span className="text-xl p-4">{"welcome again "+user.name+""}</span>

        

         {/* Rest Operator: used in Array Destructuring

 
                const animals = ["cat", "dog", "rabbit", "horse"];
                const [first, ...rest] = animals;

                console.log(first); // "cat"
                console.log(rest);  // ["dog", "rabbit", "horse"] */}

      </div>

    );
  };

export default Header;