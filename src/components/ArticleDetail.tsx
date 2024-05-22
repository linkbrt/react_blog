import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CommentForm from './CommentForm';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = useSelector((state: RootState) =>
    state.blog.articles.find(article => article.id === Number(id))
  );

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <div className="comments">
        <h3>Комментарии</h3>
        <ul>
          {article.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <CommentForm articleId={article.id} />
      </div>
    </div>
  );
};

export default ArticleDetail;