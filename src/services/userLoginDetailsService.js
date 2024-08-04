import { requestFactory } from "../services/requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/users-login-details`;

export const userLoginDetailsServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    register: (data) => request.post(`${baseUrl}/register`, data),

    login: (data) => request.post(`${baseUrl}/login`, data),

    getOne: (userId) => request.get(`${baseUrl}/${userId}`),

    updateEmail: (userId, data) =>
      request.put(`${baseUrl}/email/${userId}`, data),

    updatePassword: (userId, data) =>
      request.put(`${baseUrl}/password/${userId}`, data),

    logout: () => request.get(`${baseUrl}/logout`),
  };
};
