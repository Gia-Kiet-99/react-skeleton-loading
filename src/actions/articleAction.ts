import { IArticle, IArticleAction } from 'types';

export const setArticles = (articles: IArticle[]): IArticleAction => ({
  type: 'SET_ARTICLES',
  payload: articles,
});
