import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Test from "../Test";
import { AuthContext } from "../context/AuthContext";

import ResetPassword from "./user-forms/ResetPassword";
import ForgotPassword from "./user-forms/ForgotPassword";

import AddOrder from "./order/AddOrder";
import Payment from "./payment/Payment";
import PaymentMethod from "./payment/PaymentMethod";

function PrivateRoute({ children }) {
  const { prokash_user, logout, login } = useContext(AuthContext);
  // console.log("prokash_user?.data?.token", prokash_user);
  return prokash_user?.token ? children : <Navigate to="/" />;
}
const Navigation = ({
  signUpOpen,
  setSignUpOpen,
  handleClickSignUpOpen,
  handleSignUpClose,
}) => {
  return (
    <div>
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              signUpOpen={signUpOpen}
              setSignUpOpen={setSignUpOpen}
              handleClickSignUpOpen={handleClickSignUpOpen}
              handleSignUpClose={handleSignUpClose}
            />
          }
        />

        <Route path="/test" element={<Test />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="payment/callback" element={<Payment />} />
        <Route path="payment-method" element={<PaymentMethod />} />
        <Route
          path="change-password"
          element={
            <PrivateRoute>
              <ResetPassword />
            </PrivateRoute>
          }
        />
        <Route
          path="create-campaign"
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
