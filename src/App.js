import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Blogs from "./component/Blogs/Blogs";
import Dashboard from "./component/Dashboard/Dashboard";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Review from "./component/Review/Review";

function App() {
  return (
    <div className="App mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
