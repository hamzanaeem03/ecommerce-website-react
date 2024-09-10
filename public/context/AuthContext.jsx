import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../src/utils/firebase";
import { div } from "framer-motion/client";
import { Spinner } from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    UserInfo: {},
  });
  const [loading, setLoading] = useState(true);

  // Handle user state changes
  function onAuthChanged(user) {
    if(user){
console.log('user   =>', user)
        setUser({isLogin: true, UserInfo:{
            name : user?.displayName,
            email: user?.email
        }}); 
    }else{
        setUser({isLogin: false,UserInfo: {}}); 

    }
        setLoading(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {loading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <Spinner />{" "}
        </div>
      ) : (
        { children }
      )}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
