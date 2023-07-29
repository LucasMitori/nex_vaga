import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    {/* <Route path="/login/dashboardAdm" elemet={<DashboardAdmPage />} /> */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesMain;
