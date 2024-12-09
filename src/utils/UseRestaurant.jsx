import { useState, useEffect } from "react";
import RestrauntList from "../config";

const useRestaurant = (id) => {
    
    const [foundRestaurant, setFoundRestaurant] = useState(null);
     
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      
        const found = RestrauntList?.find(
          (restaurant) => restaurant.id === Number(id)
        );
    
        const timer = setTimeout(() => {
          setFoundRestaurant(found);
          setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer); 
      }, [id]);

      return  {foundRestaurant , isLoading};
}

export default useRestaurant;