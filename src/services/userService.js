import { requestFactory } from "../services/requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/users`;

export const userServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    register: (data) => request.post(`${baseUrl}/register`, data),

    login: (data) => request.post(`${baseUrl}/login`, data),

    getUser: (userId) => request.get(`${baseUrl}/${userId}`),

    updateEmail: (userId, data) =>
      request.put(`${baseUrl}/update-email/${userId}`, data),

    updatePassword: (userId, data) =>
      request.put(`${baseUrl}/update-password/${userId}`, data),

    logout: () => request.get(`${baseUrl}/logout`),

    delete: (userId) => request.delete(`${baseUrl}/delete/${userId}`),
  };
};
