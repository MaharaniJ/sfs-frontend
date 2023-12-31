import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/register" element={<Register />} />
      <Route  path="/edit/:id" element={<Edit />}/>
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
    </>
  );
}


export default App;
