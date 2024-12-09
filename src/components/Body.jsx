import RestaurantList from "../config";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect , useContext } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/filterData";
import useOnline from "../utils/useOnline";
import userContext from "../utils/createContext";


const Body = () => {

  const [searchInput, setSearchInput] = useState("kfc");
  const [restaurants, setRestaurants] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {user , setUser} = useContext(userContext);
   
 
  // hook is nothing but a normal js function which gives us some functionlity . one of them is usestate() which is used to create state variable.

  // props -> properties/data (means to pass some data on functional component)

  // for giving inline styling we have to pass an object inside curly bracket -> style =  {object}

  //  it return a array in which first element is a state variable name and another is a function.

  // why we need state variable -> suppose if i make a local variable a = 10 and some other component change the value of it .
  // but react  will  not know that it have to update it on ui. that is why we have to create a state variable and react
  // keep track of all of them and whenever value of state variable change it will rerender component.

  // whenever state changes or props changes react rerender the component.
  // after every rerender useeffect hook will run and it call the call back function inside it.

  useEffect(() => {
    //console.log("effect")
    // api call
    //  getRestaurant();
    const timer = setTimeout(() => {
      setRestaurants(RestaurantList);
      setIsLoading(false);
       
    }, 2000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  // console.log("render");
   

  // if we do not pass any thing inside a useeffect than useeffect will be called after every render.
  // if we pass a empty array than useEffect will be called once at initial render.
  // never use useEffect inside a if condition and loop.  and never create state outside a functional component.
  // we can create many useeffect

  // async function getRestaurant(){
  //    const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

  //    const json = await data.json();
  //    setRestaurants(json);
  //  console.log(json)

  // }

  // loads -> render -> api call -> ui update
  //  empty dependency array -> once after render
  // dependency array with some parameter -> call once after initial render +  everytime after re-render(change occur in parameter)

  const online = useOnline();

  if(!online){
    return <h1>you are currently offline</h1>
  }

  
  
  return (

     
    <>
      <div className=" textBox Search-Container ml-0  p-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded text-gray-800  focus:outline-none ml-6 p-2 w-64
          focus:ring-2  focus:border-blue-500"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          
        />

        <button
          className="Search-btn bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-700  hover:-translate-y
          transition ease-in-out delay-150  hover:scale-110  font-semibold"
          onClick={() => {
            const data = searchInput? filterData(searchInput, RestaurantList): RestaurantList;
            setRestaurants(data);
          }}
        >
          Search
        </button>

        <input  
        value={user.name}  
        className="border-black bg-slate-300 border m-2" 
        onChange={(e) => setUser( 
          {
             name: e.target.value,
          }
        )}/>

         
        
      </div>

      <div className="flex flex-wrap gap-4 mt-3">

        {isLoading ? <Shimmer/> : 
        restaurants?.length === 0 ? <h2>No restaurants found</h2> : 
        (
          restaurants.map((restaurant) => (
            <RestaurantCards {...restaurant}  key={restaurant.id}  />
          ))
        )
        }
      </div>

     
    </>
  );
};

export default Body;

{
  /* "The spread operator (...) is used to take all the elements from an array or properties from an object and 'spread' them out into another array or object, or even as individual arguments in a function. */
}

// we can run only js expression inside {} not a statement
//  {int a = 10;}
//  {console.log("a")}  -> not possible because of statement\

// {(a=10) , console.log(a) } -> this is possible
// we can directly pass bolean inside a state and other string inside a ""
