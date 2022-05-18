import axios from "axios";
import { createContext, useContext } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const Signup = async ({}) => {
    try {
      const response = await axios.post("/api/auth/signup");
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ Signup }}>{children}</AuthContext.Provider>
  );
};
export { useAuth, AuthProvider };
