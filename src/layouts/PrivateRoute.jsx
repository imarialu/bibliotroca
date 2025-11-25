    import { useAuth } from "../hooks/useAuth";
    import { Outlet, Navigate } from "react-router";

    export default function PrivateRoute({children}){
        const { user, loading } = useAuth();

        if (loading) return null;

        return user ? <Outlet /> : <Navigate to="/login" />;
    }