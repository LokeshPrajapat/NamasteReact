import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    return(
        <div className="body-container">
                <div className="search">Search</div>
                <div className="res-container">
                    <RestaurantCard/>
                </div>
        </div>
    )
}
export default Body;