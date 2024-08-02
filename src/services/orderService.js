import { requestFactory } from "./requester";
import { HOST } from "../constants/host";

const baseUrl = `${HOST}/orders`;

export const orderServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    confirm: (userId) => request.get(`${baseUrl}/confirm/${userId}`),

    getAll: (userId) => request.get(`${baseUrl}/${userId}`),
  };
};
