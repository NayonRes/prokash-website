import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Test from "../Test";
import { AuthContext } from "../context/AuthContext";

import ResetPassword from "./user-forms/ResetPassword";
import ForgotPassword from "./user-forms/ForgotPassword";

import AddOrder from "./order/AddOrder";

function PrivateRoute({ children }) {
  const { prokash_user, logout, login } = useContext(AuthContext);
  // console.log("prokash_user?.data?.token", prokash_user);
  return prokash_user?.token ? children : <Navigate to="/" />;
}
const Navigation = () => {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/test" element={<Test />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route
          path="change-password"
          element={
            <PrivateRoute>
              <ResetPassword />
            </PrivateRoute>
          }
        />
        <Route
          path="add-order"
          element={
            <PrivateRoute>
              <AddOrder />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Navigation;
