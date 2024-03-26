import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [listOfResaturants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant]=useState([]);

  const [searchText, setSearchText]=useState("");

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData=async()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.583291814470503&lng=73.78459849081838&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsondata = await data.json();
    console.log(jsondata);

    setListOfRestaurant(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

const onlineStatus = useOnlineStatus();

if(onlineStatus ===false )return 
<h1> Look's like you are offline.Please check your internet connection.</h1>

  if(listOfResaturants.length===0){
    return<Shimmer/>
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search ">
            <input type="text" className="border border-solid border-black m-4" 
            value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button className="px-4 py-1  bg-blue-200 m-4 rounded-lg" onClick={()=>{
                const filteredRestro=listOfResaturants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurant(filteredRestro);
            }}>Search</button>
        </div>
        <button
          className="px-4 py-2 bg-gray-300 m-4 p-4 "
          onClick={() => {
            //filter Logic
            const filteredList = listOfResaturants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button><br></br>
      </div>
      
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to = {"/restaurants/"+restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
        </Link>))}
      </div>
    </div>
  );
};

export default Body;
