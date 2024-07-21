import { HOST } from "../constants/host";

const baseUrl = `${HOST}/jewelries`;

export const getOne = async (jewelryId) => {
  const response = await fetch(`${baseUrl}/${jewelryId}`);
console.log(response)
  const result = await response.json();

  return result;
};
