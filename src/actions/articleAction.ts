import { IArticle, IArticleAction } from 'types';

const SET_ARTICLES = 'SET_ARTICLES';

export const setArticles = (articles: IArticle[]): IArticleAction => ({
  type: SET_ARTICLES,
  payload: articles,
});
