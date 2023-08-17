import React from "react";
import DashboardCard from "../DashboardCard/DashboardCard";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { userList } from "../../config";


const Dashboard = () => {
  return (
    <div className="db">
    <div
      className="card"
      style={{ width: "30rem", marginLeft: "30rem", marginTop: "8rem" }}
    >
      <div className="card-header h-24" style={{textAlign: "center", paddingTop: "20px", color: "gray", fontSize: "1.5rem"}}>Select an account</div>
      <ul className="list-group list-group-flush scroll">
        {userList.map((user) => {
        return (<li className="list-group-item"><Link to={"/user/" + user.id} key={user.id} state={user} className="links"><DashboardCard {...user} /></Link></li>);
      })}
      </ul>
    </div>
    </div>
  );
};

export default Dashboard;
