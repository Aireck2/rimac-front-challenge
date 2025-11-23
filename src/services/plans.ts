const BASE_URL = 'https://rimac-front-end-challenge.netlify.app/api';

export const getPlans = async () => {
  const response = await fetch(`${BASE_URL}/plans.json`);
  return response.json();
};
