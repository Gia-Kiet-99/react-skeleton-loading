import axios from 'config/axios.config';
import { IUser } from 'types';

const getUserInfo = async (userId: number): Promise<IUser> => {
  const { data } = await axios({
    url: `/users/${userId}`,
    method: 'GET',
  });
  return data;
};

export default {
  getUserInfo,
};
