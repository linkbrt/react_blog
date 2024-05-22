import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link } from 'react-router-dom';

const ArticleList: React.FC = () => {
  const articles = useSelector((state: RootState) => state.blog.articles);
  const searchQuery = useSelector((state: RootState) => state.blog.searchQuery.toLowerCase());

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery) ||
    article.description.toLowerCase().includes(searchQuery) ||
    article.content.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      {filteredArticles.map(article => (
        <div key={article.id} className="article">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <Link to={`/article/${article.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;