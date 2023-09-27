import React, { lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
//import Shimmer from "./components/Shimmer";

// This is veryyyyy important
const Grocery = lazy(() => { return import("./components/Grocery")}); 

const AboutUs=lazy(()=> import("./components/AboutUs"))
const App=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:(<Suspense fallback={<h1>Loading...</h1>}>
                    <AboutUs/>
                </Suspense>)
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<div>Loading...</div>}>
                    <Grocery/>
                </Suspense>)
            },
            {
                path:"/restaurantmenu/:resId",
                element:<RestaurantMenu/>
            },
            
        ],
        errorElement:<Error/>
    },
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);