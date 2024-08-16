import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/jewelries`;

export const jewelryServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    getAll: (categoryId) => request.get(`${baseUrl}/${categoryId}`)
    // getOne: (jewelryId) => request.get(`${baseUrl}/${jewelryId}`),

    // getAll: (collectionId, categoryId, skip, limit) =>
    //   request.get(`${baseUrl}/${collectionId}/${categoryId}/${skip}/${limit}`),
  };
};
