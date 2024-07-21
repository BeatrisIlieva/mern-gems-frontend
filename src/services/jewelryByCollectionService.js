import { HOST } from "../constants/host";

const baseUrl = `${HOST}/collections`;

export const getAll = async (collectionId, skip, limit) => {
  const response = await fetch(`${baseUrl}/${collectionId}/${skip}/${limit}`);

  const result = await response.json();

  return result;
};
