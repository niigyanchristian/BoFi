import { useContext } from "react";
import "core-js/stable/atob";
import AuthContext from "./context";
import authStorage from "./storage";
import { router } from "expo-router";

export default useAuth = () => {
  const { user, setUser,width,height } = useContext(AuthContext);

  const logIn = (authToken) => {
    setUser(JSON.parse(authToken));
    authStorage.storeToken(authToken);
    router.replace('/(tabs)/home');
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
    router.replace('/');
  };
  

  return { user,width,height,setUser,logIn, logOut };
};
