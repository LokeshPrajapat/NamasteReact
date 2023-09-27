import { useState } from "react";
import { defer } from "react-router-dom";

const useOnlineStatus=()=>{
    const[onlineStatus,setOnlineStatus]=useState(true);

    window.addEventListener("offline",()=>{
        setOnlineStatus(false);
    });
    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    })

    return onlineStatus;
}

export default useOnlineStatus;