import axios from 'axios';

const API_URL = 'https://reqres.in/api/users?page=1';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
