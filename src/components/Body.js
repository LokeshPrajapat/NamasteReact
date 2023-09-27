import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";



const Body=()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    useEffect(()=>{
        getRestaurants();
    },[]);

    const getRestaurants=async()=>{
        const response=await fetch(SWIGGY_API_URL);
        const jsonData=await response.json();
        //console.log(jsonData);
        const restaurants= jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurants);
        setFilteredRestaurants(restaurants);
    }
    
    return(
        listOfRestaurant.length===0 ? (<Shimmer/>) :
        (
        <div className="body-container">
                <div className="search">
                    <input type='text' value={searchText} 
                    onChange={(ev)=>{
                            setSearchText(ev.target.value) 
                        }}/>
                    <button onClick={()=>{
                        const filterRes=listOfRestaurant.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filterRes);
                    }}>Search</button>
                </div>
                <div className="res-container">
                    <RestaurantCard/>
                    {
                        filteredRestaurants.map((res)=>{
                            return(
                                <Link to={'/restaurantmenu/'+res.info.id} id={res.info.id}><RestaurantCard name={res.info.name} avgRating={res.info.avgRating} cuisines={res.info.cuisines} deliveryTime={res.info.sla.deliveryTime} cloudinaryImageId={res.info.cloudinaryImageId}/></Link>
                            )
                        })
                    }
                </div>
        </div>
        )
                
    )
}
export default Body;