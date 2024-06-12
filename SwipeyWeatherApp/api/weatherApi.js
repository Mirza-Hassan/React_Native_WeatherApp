import axios from 'axios';
import {API_KEY, BASE_URL} from '../config';

// Fetch weather data
export const getWeather = async city => {
  try {
    // Make API request
    const response = await axios.get(
      `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
