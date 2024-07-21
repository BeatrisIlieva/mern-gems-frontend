import { HOST } from "../constants/host";

const baseUrl = `${HOST}/categories`;

export const getAll = async (categoryId, skip, limit) => {
  const response = await fetch(`${baseUrl}/${categoryId}/${skip}/${limit}`);

  const result = await response.json();

  return result;
};
