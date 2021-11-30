import React, { memo, useEffect } from 'react';
import articleService from 'api/ArticleAPI';
import { setArticles } from 'actions/articleAction';
import { useAppDispatch, useAppSelector } from 'global/store';
import SkeletonArticle from './skeletonArticle';

function Articles() {
  const articles = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      setTimeout(() => {
        articleService.getAllArticles()
          .then((data) => {
            if (data) {
              dispatch(setArticles(data));
            }
          });
      }, 3000);
    }
  }, [articles]);

  return (
    <div className="articles">
      <h2>All Articles</h2>

      {articles.length > 0 && (
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))
      )}

      {articles.length <= 0 && (
        [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)
      )}
    </div>
  );
}

export default memo(Articles);
