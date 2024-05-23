import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';

const App: React.FC = () => {
  return (
    <HashRouter >
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage/>} />
        </Routes>
      </div>
    </HashRouter >
  );
};

export default App;