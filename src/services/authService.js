import { HOST } from "../constants/host";

const baseUrl = `${HOST}/users`;

export const register = async (data) => {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: { "content-type": "application/json",  },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
};

export const login = async (data) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "content-type": "application/json",  },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
};

export const logout = async () => {
  const response = await fetch(`${baseUrl}/logout`, {
    method: "GET",
  });

  const result = await response.json();

  return result;
};

export const updateEmail = async (userId, data, token) => {
  const response = await fetch(`${baseUrl}/update-email/${userId}`, {
    method: "PUT",
    headers: { "content-type": "application/json", "X-Authorization": token },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw result;
  } else {
    

    return result;
  }
};

export const updatePassword = async (userId, data, token) => {

  const response = await fetch(`${baseUrl}/update-password/${userId}`, {
    method: "PUT",
    headers: { "content-type": "application/json", "X-Authorization": token },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (!response.ok) {
    throw result;
  } else {
    

    return result;
  }
};

export const remove = async (userId, token) => {
  const response = await fetch(`${baseUrl}/delete/${userId}`, {
    method: "DELETE",
    headers: { "content-type": "application/json", "X-Authorization": token },
  });

  const result = await response.json();

  return result;
};

export const getUser = async (userId, token) => {
  const response = await fetch(`${baseUrl}/${userId}`, {
    method: "GET",
    headers: { "content-type": "application/json", "X-Authorization": token },
    
  });

  const result = await response.json();

  return result;
};
