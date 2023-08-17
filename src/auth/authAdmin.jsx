import { useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const AdminAuth = () => {
  const dataUser = localStorage.getItem("role");
  const [auth] = useState(dataUser ? dataUser : null);
  const location = useLocation();
  console.log(auth);
  return auth === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace={true} />
  );
};

export default AdminAuth;
