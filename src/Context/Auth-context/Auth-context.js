import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: localStorage.getItem("token"),
    isAuth: localStorage.getItem("token") ? true : false,
  });
  const signup = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
        lastName,
      });
      localStorage.setItem("token", response.data.createdUser.encodedToken);
    } catch (error) {
      console.error(error);
    }
  };
  const login = async ({ email, password }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.createdUser.encodedToken);
      console.log(
        "respseons from auth-context login",
        response.data.createdUser.encodedToken
      );
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      const response = await axios.post("/api/auth/signup");
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { useAuth, AuthProvider };
