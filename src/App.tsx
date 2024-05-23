import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';

const App: React.FC = () => {
  return (
    <BrowserRouter basename='/react_blog/'>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage/>} />
        </Routes>
      </div>
    </BrowserRouter >
  );
};

export default App;