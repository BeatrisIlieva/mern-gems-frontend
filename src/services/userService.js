import { requestFactory } from "../services/requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/users`;

export const userServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    register: (data) => request.post(`${baseUrl}/register`, data),

    login: (data) => request.post(`${baseUrl}/login`, data),

    getUserLoginDetails: (userId) => request.get(`${baseUrl}/${userId}`),

    updateEmail: (userId, data) =>
      request.put(`${baseUrl}/email/${userId}`, data),

    updatePassword: (userId, data) =>
      request.put(`${baseUrl}/password/${userId}`, data),

    updateShippingDetails: (userId, data) =>
      request.put(`${baseUrl}/shipping-details/${userId}`, data),

    getUserShippingDetails: (userId) =>
      request.get(`${baseUrl}/shipping-details/${userId}`),

    logout: () => request.get(`${baseUrl}/logout`),

    delete: (userId) => request.delete(`${baseUrl}/delete/${userId}`),
  };
};
