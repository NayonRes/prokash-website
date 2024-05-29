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
import OrderList from "./order/order-list/OrderList";
import TermsOfService from "./terms-of-service/TermsOfService";
import Service from "../Service";

function PrivateRoute({ children }) {
  const { prokash_user, logout, login } = useContext(AuthContext);
  // console.log("prokash_user?.data?.token", prokash_user);
  return prokash_user?.token ? children : <Navigate to="/" />;
}
const Navigation = ({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
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
              open={open}
              setOpen={setOpen}
              handleClickOpen={handleClickOpen}
              handleClose={handleClickOpen}
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
        <Route
          path="payment-method"
          element={
            <PrivateRoute>
              <PaymentMethod />
            </PrivateRoute>
          }
        />
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
        <Route
          path="campaign-list"
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="service" element={<Service />} />
      </Routes>
    </div>
  );
};

export default Navigation;
