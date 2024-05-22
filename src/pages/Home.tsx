import React from 'react';
import ArticleList from '../components/ArticleList';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Добро пожаловать в блог</h1>
      <SearchBar />
      <ArticleList />
    </div>
  );
};

export default Home;