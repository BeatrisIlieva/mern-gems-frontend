import { requestFactory } from "./requester";
import { HOST } from "../constants/host";

const baseUrl = `${HOST}/jewelries`;

export const jewelryServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    getOne: (jewelryId) => request.get(`${baseUrl}/${jewelryId}`),

    getAll: (collectionId, categoryId, skip, limit) =>
      request.get(`${baseUrl}/${collectionId}/${categoryId}/${skip}/${limit}`),
  };
};
