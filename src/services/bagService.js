import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/bags`;

export const bagServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    create: (data, jewelryId) =>
      request.post(`${baseUrl}/create/${jewelryId}`, data),

    getAll: (userId) => request.get(`${baseUrl}/${userId}`),

    increase: (bagId, inventoryId) => request.put(`${baseUrl}/increase/${bagId}/${inventoryId}`),

    delete: (bagId) => request.delete(`${baseUrl}/delete/${bagId}`),
  };
};
