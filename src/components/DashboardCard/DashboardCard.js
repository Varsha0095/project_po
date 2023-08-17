import React from "react";
import './DashboardCard.css';
// import { userList } from "../../config";

const DashboardCard = ({name, profilepicture}) => {
 
    return (
        <div>
        <div className="card d-flex flex-row p-3">
            <img style={{height: "60px", width: "60px", borderRadius: "50%"}} src={profilepicture} alt="userPicture"/>
            <h4 style={{marginLeft: "25px"}}>{name}</h4>
        </div>
        </div> 
    )
}

export default DashboardCard;