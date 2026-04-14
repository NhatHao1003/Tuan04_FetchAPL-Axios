import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPosts, setSearchQuery } from '../store/searchSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const { query, results, loading, error } = useSelector((state) => state.search);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query.trim()) {
        dispatch(searchPosts(query));
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [query, dispatch]);

  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        placeholder="Tìm kiếm bài viết (debounce 500ms)..."
        className="search-input"
      />

      {loading && <p className="search-loading">Đang tìm kiếm...</p>}

      {error && <p className="search-error">Lỗi: {error}</p>}

      {!loading && !error && results.length > 0 && (
        <ul className="search-results">
          {results.map((post) => (
            <li key={post.id} className="search-item">
              <p className="search-title">Bài viết #{post.id}</p>
              <p className="search-body">{post.title}</p>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && query.trim() && results.length === 0 && (
        <p className="search-empty">Không có kết quả.</p>
      )}
    </div>
  );
};

export default SearchBox;
