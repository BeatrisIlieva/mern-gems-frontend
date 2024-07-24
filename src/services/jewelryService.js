import { requestFactory } from "./requester";
import { HOST } from "../constants/host";

const baseUrl = `${HOST}/jewelries`;

export const jewelryServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    getOne: (jewelryId) => request.get(`${baseUrl}/${jewelryId}`),

    getAllByCategory: (categoryId, skip, limit) =>
      request.get(`${baseUrl}/categories/${categoryId}/${skip}/${limit}`),

    getAllByCollection: (collectionId, skip, limit) =>
      request.get(`${baseUrl}/collections/${collectionId}/${skip}/${limit}`),
  };
};
