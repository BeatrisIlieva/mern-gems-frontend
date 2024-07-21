import { HOST } from "../constants/host";

const baseUrl = `${HOST}/categories`;

export const getAll = async (categoryId) => {
  const response = await fetch(`${baseUrl}/${categoryId}`);

  const result = await response.json();

  return result;
};
