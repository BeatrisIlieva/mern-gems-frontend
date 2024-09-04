import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/wishlists`;

export const wishlistServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    add: (categoryId, colorId, userId) =>
      request.get(`${baseUrl}/add/${categoryId}/${colorId}/${userId}`),

    getAll: (userId) => request.get(`${baseUrl}/${userId}`),

    delete: (categoryId, colorId, userId) =>
      request.delete(`${baseUrl}/delete/${categoryId}/${colorId}/${userId}`),
  };
};
