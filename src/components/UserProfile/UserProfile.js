import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./UserProfile.css";
import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
import Footer from "../Footer/Footer";
import { MapContainer, TileLayer } from 'react-leaflet';

const UserProfile = () => {
  // const params = useParams();
  // const { id } = params;
  const location = useLocation();
  const user = location.state;
  const position = [user.address.geo.lat, user.address.geo.lng];
  return (
    <>
      <Header user={user} />
      <Sidebar />
      <div className="container text-center">
        <div className="row row-cols-2">
          <div className="col">
                <div className="data">
            <img style={{height: "95px", width: "95px", borderRadius: "50%", objectFit: "contain"}} src={user.profilepicture} alt="userphoto" />
                  <h6>{user.name}</h6>
                  <div>Username :{user.username}</div>
                  <div>e-mail :{user.email}</div>
                  <div>Phone :{user.phone}</div>
                  <div>Website :{user.website}</div>
                </div>
            <div className="data2">
              <h6>Company</h6>
              <div>Name : {user.company.name}</div>
              <div>catchphrase : {user.company.catchPhrase}</div>
              <div>bs : {user.company.bs}</div>
            </div>
          </div>

          <div className="col-4">
            <div className="data3">
              <h6>Address: </h6>
              <div>Street : {user.address.street}</div>
              <div>Suite : {user.address.suite}</div>
              <div>City : {user.address.city}</div>
              <div>Zipcode : {user.address.zipcode}</div>
            </div>
            <div>
              <MapContainer center={position} zoom={2} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                icon={Icon}
                </Marker>
              </MapContainer>
              <p style={{marginLeft: "10rem"}}>Lat: {user.address.geo.lat} & Long: {user.address.geo.lng}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserProfile;
