import { IArticle, IArticleAction } from '../types/type';

const articleReducer = (state: IArticle[] = [], action: IArticleAction): IArticle[] => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return [...action.payload];
    default:
      return state;
  }
};

export default articleReducer;
