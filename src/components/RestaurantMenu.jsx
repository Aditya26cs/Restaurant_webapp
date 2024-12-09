// import React, { useState, useEffect } from "react";
// import RestrauntList from "../config";

import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/UseRestaurant";
import {useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice"; 

const RestaurantMenu = () => {

  const { id } = useParams();
  const {foundRestaurant , isLoading} = useRestaurant(id);

 const dispatch = useDispatch();

  const handleAddItem = (cuisine) => {
    dispatch(addItem(cuisine));
  } 

  
  
  return (
    <div>
      <div className="border rounded-sm border-black h-fit w-fit p-4 m-4 flex flex-wrap gap-4 mt-3">
        {isLoading ? (
          <Shimmer/>
        ) : (
          <div>
           
            <h1>{foundRestaurant?.name}</h1> 
            <p>{foundRestaurant?.rating}</p>
            <h2>{foundRestaurant?.price}</h2>
            <h2 className="mt-4 font-bold">foods available</h2>
            <ul>
              {foundRestaurant?.cuisines?.map((cuisine, index) => {
                return <li key={index}>
                  {"items " + cuisine} 
                  <button className="border-black bg-blue-300 border m-2 p-1" onClick={() => handleAddItem(cuisine)}> add items </button>
                  </li>;
              })}
            </ul>
             
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;

//  the useParams hook is used to access URL parameters in a component.

// When a URL contains dynamic segments (e.g., /user/:id), useParams allows you to grab the value of those segments (like id in this case).
// Inside your component, calling useParams() returns an object where each dynamic part of the URL is a key and its value is the part from the current URL.
