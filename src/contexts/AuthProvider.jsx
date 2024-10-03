import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "FInal",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// context componet create = rsc
// create context =  export const AuthContext = createContext();
// return Context.provider with value =  <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//context call in main.jsx filder must be wrap APP components ==
/* <AuthProvider>
      <App />
</AuthProvider> */
// context component get children (received children) + set in ContextProvider
// ContextProvider pass default valu =  <AuthContext.Provider value={authInfo}>
