import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/wishlists`;

export const wishlistServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    add: (jewelryId, userId) =>
      request.get(`${baseUrl}/add/${jewelryId}/${userId}`),

    getAll: (userId) => request.get(`${baseUrl}/${userId}`),

    delete: (jewelryId, userId) =>
      request.delete(`${baseUrl}/delete/${jewelryId}/${userId}`),
  };
};
