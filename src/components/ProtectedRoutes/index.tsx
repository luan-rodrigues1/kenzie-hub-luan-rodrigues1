import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
    
    const { loading } = useContext(AuthContext);
    const { isLogged } = useContext(UserContext);

    if (loading) {
        return null;
    }

    return isLogged ? <Outlet/> : <Navigate to="/" replace />;
}

export default ProtectedRoutes