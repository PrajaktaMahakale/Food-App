import { IMG_CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (props)=>{
  const{resData}=props;

  return (
 
    <div className="m-4 p-4 w-[250px] rounded-lg ">
      
      <img 
      className="rounded-lg"
      alt='res-logo'src={IMG_CDN_URL + resData.info.cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg" >{resData.info.name }</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.avgRating} Stars</h4>
        <h4>{resData.info.sla.deliveryTime} Minutes</h4></div>
    )
  }
        
export default RestaurantCard;