import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/jewelries`;

export const jewelryServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    getOne: (categoryId, colorId) =>
      request.get(`${baseUrl}/${categoryId}/${colorId}`),
  };
};
