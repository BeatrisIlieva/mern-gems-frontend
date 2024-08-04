import { requestFactory } from "../services/requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/users-card-details`;

export const userCardDetailsServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    update: (userId, data) => request.put(`${baseUrl}/${userId}`, data),

    getOne: (userId) => request.get(`${baseUrl}/${userId}`),
  };
};
