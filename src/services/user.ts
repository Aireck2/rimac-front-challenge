const BASE_URL = 'https://rimac-front-end-challenge.netlify.app/api';

export const getUser = async () => {
  const response = await fetch(`${BASE_URL}/user.json`);
  return response.json();
};
