import { requestFactory } from "./requester";
import { HOST } from "../constants/host";

const baseUrl = `${HOST}/payments`;

export const paymentServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    confirm: (userId, data) => request.post(`${baseUrl}/${userId}`, data),
  };
};
