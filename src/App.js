import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import Posts from "./components/pages/Posts";
import Gallery from "./components/pages/Gallery";
import ToDo from "./components/pages/ToDo";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/user/:id" element={<UserProfile />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/todo" element={<ToDo />} />
      </Routes>
    </>
  );
}

export default App;
