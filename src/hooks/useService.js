import { useAuthenticationContext } from "../contexts/AuthenticationContext";

export const useService = (serviceFactory) => {
  const { token } = useAuthenticationContext();

  const service = serviceFactory(token);

  return service;
};
