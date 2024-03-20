import { IMG_CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (props)=>{
  const{resData}=props;

  return (
    <div className="card">
      <img className='rescard-logo' alt='res-logo'src={IMG_CDN_URL + resData.info.cloudinaryImageId} />
      <h3 >{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.avgRating} Stars</h4>
        <h4>{resData.info.sla.deliveryTime} Minutes</h4></div>
    )
  }
        
export default RestaurantCard;