import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants";

const useRestaurantMenu =(resId) => {
 const [resInfo, setResInfo] = useState(null);
  
useEffect(()=> {  // creating new componenent fetching data from that compnent instead using this useEffect fromm here.
      fetchMenu();
    },[]);

     const fetchMenu = async () => {
        const data = await fetch (MENU_API + resId);

        const json = await data.json();
         
        console.log(json);
        setResInfo(json.data)
     };
     
return resInfo;
}; 

export default useRestaurantMenu;