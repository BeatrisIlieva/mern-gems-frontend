import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/jewelries`;

export const jewelryServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    getAll: (categoryId) => request.get(`${baseUrl}/${categoryId}`),

    getOne: (categoryId, colorId) =>
      request.get(`${baseUrl}/${categoryId}/${colorId}`),
  };
};
