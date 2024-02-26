import React, { createContext, useReducer, useEffect } from "react";

import authReducer from "./authReducer";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [prokash_user, dispatch] = useReducer(authReducer, {}, () => {
    const localData = localStorage.getItem("prokash_user");
    return localData ? JSON.parse(localData) : {};
  });

  const login = async (data) => {
    dispatch({
      type: "LOGIN",
      payload: data,
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: {},
    });
  };

  useEffect(() => {
    localStorage.setItem("prokash_user", JSON.stringify(prokash_user));
  }, [login]);

  return (
    <AuthContext.Provider value={{ login, prokash_user, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
