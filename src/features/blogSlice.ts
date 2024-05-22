import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  comments: string[];
}

interface BlogState {
  articles: Article[];
  searchQuery: string;
}

const initialState: BlogState = {
  articles: [
    {
      id: 1,
      title: "Первая статья",
      description: "Краткое описание первой статьи",
      content: "Полный текст первой статьи...",
      comments: [],
    },
    {
      id: 2,
      title: "Вторая статья",
      description: "Краткое описание второй статьи",
      content: "Полный текст второй статьи...",
      comments: [],
    },
    {
      id: 3,
      title: "Третья статья",
      description: "Краткое описание третьей статьи",
      content: "Полный текст третьей статьи...",
      comments: [],
    },
    {
      id: 4,
      title: "Четвертая статья",
      description: "Краткое описание четвертой статьи",
      content: "Полный текст четвертой статьи...",
      comments: [],
    },
    {
      id: 5,
      title: "Пятая статья",
      description: "Краткое описание пятой статьи",
      content: "Полный текст пятой статьи...",
      comments: [],
    },
  ],
  searchQuery: '',
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      state.articles.push(action.payload);
    },
    addComment: (state, action: PayloadAction<{ articleId: number; comment: string }>) => {
      const article = state.articles.find(article => article.id === action.payload.articleId);
      if (article) {
        article.comments.push(action.payload.comment);
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addArticle, addComment, setSearchQuery } = blogSlice.actions;
export default blogSlice.reducer;