import axios from 'config/axios.config';
import { IArticle } from 'types';

function handleError(error: any) {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
}

const getAllArticles = async (): Promise<IArticle[] | null> => {
  try {
    const { data } = await axios({
      url: '/posts',
      method: 'GET',
    });
    return data;
  } catch (error: any) {
    handleError(error);
    return null;
  }
};

export default {
  getAllArticles,
};
