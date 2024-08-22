import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/bags`;

export const bagServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    add: (data, jewelryId) =>
      request.post(`${baseUrl}/add/${jewelryId}`, data),

    getAll: (userId) => request.get(`${baseUrl}/${userId}`),

    increase: (bagId) => request.put(`${baseUrl}/increase/${bagId}`),

    delete: (bagId) => request.delete(`${baseUrl}/delete/${bagId}`),

    decrease: (bagId) => request.put(`${baseUrl}/decrease/${bagId}`),
  };
};
