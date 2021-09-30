import React, { useEffect, useState } from 'react';
import articleService from '../api/ArticleAPI';
import { IArticle } from '../types/type';
import SkeletonArticle from './SkeletonArticle';

function Articles() {
  const [articles, setArticles] = useState<IArticle[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      articleService.getAllArticles()
        .then((data) => {
          if (data) {
            setArticles(data);
          }
        });
    }, 10000);
  }, []);

  return (
    <div className="articles">
      <h2>All Articles</h2>

      {articles && (
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))
      )}

      {!articles && (
        [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)
      )}
    </div>
  );
}

export default Articles;
