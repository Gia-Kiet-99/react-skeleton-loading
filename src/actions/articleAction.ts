import { IArticle, IArticleAction } from '../types/type';

export const setArticles = (articles: IArticle[]): IArticleAction => ({
  type: 'SET_ARTICLES',
  payload: articles,
});
