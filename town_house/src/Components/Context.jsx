import React, { useState, createContext } from "react";

export const authContext = createContext();

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }
function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuth: false,
    token: null,
  });

  const loginUser = (token) => {
    setAuthState({
      ...authState,
      isAuth: true,
      token: token,
    });
  };

  const logoutUser = () => {
    setAuthState({
      ...authState,
      isAuth: false,
      token: null,
    });
  };

  return (
    <authContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
