import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../features/blogSlice';

interface CommentFormProps {
  articleId: number;
}

const CommentForm: React.FC<CommentFormProps> = ({ articleId }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      dispatch(addComment({ articleId, comment }));
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Напишите комментарий..."
      />
      <button type="submit">Добавить комментарий</button>
    </form>
  );
};

export default CommentForm;