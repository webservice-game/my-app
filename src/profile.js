import React,{Component, useState, useEffect} from "react"
import { useLocation } from "react-router-dom";
function Profile() { 
    const location = useLocation();
    const [playerData, setplayerData] = useState(location.state.detail)
console.log(playerData)
    return(
        <div>
            <p>level {playerData.level}</p>
            <p>playerName {playerData.playerName}</p>
            <p>Rank {playerData.rank}</p>
        </div>
    )

}
  
export default Profile;