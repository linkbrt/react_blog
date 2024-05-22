import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../features/blogSlice';
import { RootState } from '../store';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.blog.searchQuery);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск по статьям..."
        value={searchQuery}
        onChange={handleSearch}
        style={{ padding: '0.5rem', width: '100%', boxSizing: 'border-box' }}
      />
    </div>
  );
};

export default SearchBar;