import React, { lazy , Suspense , useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";
// import Profile from "./components/Profile";
import Profile from "./components/ProfileClass";
import { createBrowserRouter , Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";

// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

// when we render the instamart for the instamart it shows error because it try to load the compononent which is not present.
// so it suspend loading.

import userContext from "./utils/createContext";

// to provide the store to the app by using provider

import { Provider } from "react-redux";

import store from "./utils/Store";
import Cart from "./components/Cart";
 


// Main App component

const App = () => {

const [user , setUser] = useState({
    name : "Rahul",
    age : 25,
    email : "rahul@gmail.com"
});

// we use context to aboid passing props to parents to child and to its child and so on called as props drilling.


return (
    
      <Provider store={store}> 
        <userContext.Provider value = {{
          user : user,
          setUser : setUser
        }}> 
          <Header/> 
          <Outlet/> 
          <Footer/>
        </userContext.Provider>
      </Provider> 

  );
};

// all the childrens will go to the outlet accoding to the route
 
export const appRouter = createBrowserRouter(

  
// createBrowserRouter :- it tells what will happens if we load a certain path. it is a function which takes array of objects.

  [
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children : [
      {
          path: "/",
          element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile/>
          }
        ]
      },
      {
        path: "/Body",
        element: <Body/>,
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/Error",
        element: <Error/>
      },
      {
        path : "/Restaurant/:id",
        element : <RestaurantMenu/>
      },
      {
        path : "/instamart",
        element:  
          <Suspense fallback={<Shimmer/>}>
            <Instamart/>
          </Suspense>
      },
      {
        path : "/cart",
        element : <Cart/>
      }

    ]
  },
   
]);


export default App;

// passing props to child to child and to its child and so on is called props drilling
