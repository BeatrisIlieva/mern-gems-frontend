import { createContext, useContext, useEffect } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

import { logout } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});

  const resetTimer = () => {
    if (auth.accessToken) {
      clearTimeout(logoutTimer);

      logoutTimer = setTimeout(async () => {
        setAuth({});

        localStorage.removeItem("auth");
//600000
        await logout();
      }, 60000000);
    }
  };

  let logoutTimer;

  useEffect(() => {
    const handleActivity = () => {
      resetTimer();
    };

    if (auth.accessToken) {
      window.addEventListener("mousemove", handleActivity);
      window.addEventListener("keydown", handleActivity);
      window.addEventListener("scroll", handleActivity);

      resetTimer();
    }

    return () => {
      window.addEventListener("mousemove", handleActivity);
      window.addEventListener("keydown", handleActivity);
      window.addEventListener("scroll", handleActivity);

      clearTimeout(logoutTimer);
    };
  }, [auth.accessToken]);

  const updateAuth = async (data) => {
    const token = data["token"];

    setAuth(token);
  };

  const context = {
    updateAuth,
    userId: auth._id,
    token: auth.accessToken,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
