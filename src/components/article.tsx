import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import articleService from 'api/ArticleAPI';
import { setArticles } from 'actions/articleAction';
import { RootState } from 'global/store';
import SkeletonArticle from './skeletonArticle';

function Articles() {
  const articles = useSelector((state: RootState) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      articleService.getAllArticles()
        .then((data) => {
          if (data) {
            dispatch(setArticles(data));
          }
        });
    }, 3000);
  }, []);

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

export default Articles;
