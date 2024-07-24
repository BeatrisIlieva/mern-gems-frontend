import { createContext, useContext, useEffect } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

import { userServiceFactory } from "../services/userService";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [authentication, setAuthentication] = useLocalStorage(
    "authentication",
    {}
  );

  const userService = userServiceFactory(authentication.accessToken);

  const resetTimer = () => {
    if (authentication.accessToken) {
      clearTimeout(logoutTimer);

      logoutTimer = setTimeout(async () => {
        setAuthentication({});

        localStorage.removeItem("authentication");
        //600000
        await userService.logout();
      }, 60000000);
    }
  };

  let logoutTimer;

  useEffect(() => {
    const handleActivity = () => {
      resetTimer();
    };

    if (authentication.accessToken) {
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
  }, [authentication.accessToken]);

  const updateAuthentication = async (data) => {
    const token = data["token"];

    setAuthentication(token);
  };

  const context = {
    updateAuthentication,
    userId: authentication._id,
    token: authentication.accessToken,
    isAuthenticated: !!authentication.accessToken,
  };

  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => {
  const context = useContext(AuthenticationContext);

  return context;
};
