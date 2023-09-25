import { IMG_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-image" src={IMG_URL+props.cloudinaryImageId}/>
            <h3>{props.name}</h3>
            <h4>{props.cuisines}</h4>
            <h4>{props.avgRating}</h4>
            <h4>{props.deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;