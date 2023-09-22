import React from "react";
import ReactDOM from "react-dom/client";

// const parent=React.createElement("div",
// {},
// React.createElement("div",{},React.createElement("h1",{},"I am an h1 tag"))
// )

// const jsxHeading=<h1 className="heading">Namaste React</h1>

// const Title=()=>{
//     return(
//         <div>
//             <h1>Namaste React using JSX</h1>
//         </div>
//     )
// }

// Component Composition Component inside the component

const HeaderComponent=()=>{
    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,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"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body-container">
                <div className="search">Search</div>
                <div className="res-container">
                    <RestaurantComponent/>
                    <RestaurantComponent/> 
                     <RestaurantComponent/> 
                      <RestaurantComponent/> 
                       <RestaurantComponent/> 
                     <RestaurantComponent/> 
                     <RestaurantComponent/>
                     <RestaurantComponent/>
                    <RestaurantComponent/> 
                     <RestaurantComponent/> 
                      <RestaurantComponent/> 
                       <RestaurantComponent/> 
                     <RestaurantComponent/> 
                     <RestaurantComponent/>
                     <RestaurantComponent/>
                    <RestaurantComponent/> 
                     <RestaurantComponent/> 
                      <RestaurantComponent/> 
                       <RestaurantComponent/> 
                     <RestaurantComponent/> 
                     <RestaurantComponent/>
                </div>
        </div>
    )
}

const RestaurantComponent=()=>{
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2bSN9usdjMZUx4EBPVaSLXBynD1kqAjJ026ROAmW&s"/>
            <h3>Meghana Foods</h3>
            <h4>North Indian</h4>
            <h4>4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <HeaderComponent/>
            <Body/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);