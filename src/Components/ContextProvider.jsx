import { createContext } from "react";

const ContextProvider = ({ children }) => {
  const UserContext = createContext();
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default ContextProvider;
