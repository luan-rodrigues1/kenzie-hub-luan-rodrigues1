import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Registration from "../pages/registration";
import ProtectedRoutes from "../components/ProtectedRoutes";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    <Route element={<ProtectedRoutes/>}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);

export default RoutesMain;