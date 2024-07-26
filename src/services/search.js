import { requestFactory } from "./requester";
import { HOST } from "../constants/host";

const baseUrl = `${HOST}/search`;

export const searchServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    getAll: (query) => request.get(`${baseUrl}?query=${query}`),
  };
};
