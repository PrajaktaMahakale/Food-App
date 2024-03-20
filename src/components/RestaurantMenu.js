import {useEffect } from "react";

const RestaurantMenu =()=>{

    useEffect(()=> {
      fetchMenu();
    },[]);
     const fetchMenu = async () => {
        const data = await fetch (
            "https://www.swiggy.com/dapi/menu/pl?page-type-REGULAR_MENU&complete-menu-true&lat=12.935192981ng-77.62448069999999&restaurant "
        );
         const json = await data.json();
         console.log(json);
     }
    return (
        <div className="menu">
            <h1> Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul> <li> Biryani</li>
            <li> Burger</li>
            <li>Diet Coke</li>
            </ul>
        </div>
    )
};
export default RestaurantMenu;