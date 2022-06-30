import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'd65d5929b4msh9060c4f64da34c9p102192jsn52fa5b5a7b2b',
    },
  });
    
  return data;
}