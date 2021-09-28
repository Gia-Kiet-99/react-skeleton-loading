import axios from '../config/axios.config';
import { UserType } from '../types/type';

const getUserInfo = async (): Promise<UserType | null> => {
  try {
    const { data } = await axios({
      url: '/users/1',
      method: 'GET',
    });
    return data;
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    return null;
  }
};

export default {
  getUserInfo,
};
