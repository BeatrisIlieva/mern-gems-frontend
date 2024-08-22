import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/bags`;

export const bagServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    create: (data, jewelryId) =>
      request.post(`${baseUrl}/create/${jewelryId}`, data),

    getAll: (userId) => request.get(`${baseUrl}/${userId}`),

    delete: (bagId) =>
      request.delete(`${baseUrl}/delete/${bagId}`),

    increase: (bagId) => request.put(`${baseUrl}/increase/${bagId}`),
    decrease: (bagId) => request.put(`${baseUrl}/decrease/${bagId}`),
  };
};
