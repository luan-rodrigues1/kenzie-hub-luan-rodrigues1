import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Registration from "../pages/registration";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default RoutesMain;