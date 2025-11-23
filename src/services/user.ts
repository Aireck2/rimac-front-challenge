const BASE_URL = import.meta.env.VITE_API_URL;

export const getUser = async () => {
  const response = await fetch(`${BASE_URL}/user.json`);
  return response.json();
};
