import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  let [listOfResaturants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant]=useState([]);

  const [searchText, setSearchText]=useState("");

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData=async()=>{
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsondata = await data.json();
    console.log(jsondata);

    setListOfRestaurant(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(listOfResaturants.length===0){
    return<Shimmer/>
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" 
            value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button onClick={()=>{
                const filteredRestro=listOfResaturants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurant(filteredRestro);
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
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
      
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to = {"/restaurants/"+restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
        </Link>))}
      </div>
    </div>
  );
};

export default Body;
