import { useParams } from "react-router-dom";
import { MENU_URl } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const [resData,setResData]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    if(resData===null) return <Shimmer/>

      async function fetchData()     {
        const data=await fetch(MENU_URl+resId);
        const jsonData=data.json();
        setResData(jsonData);
    }

    

    console.log(resData?.data?.cards[1]?.info?.name)
    return(
        <div>{resData?.data?.cards[0]?.card?.card?.info?.name}</div>
    )
}

export default RestaurantMenu;
