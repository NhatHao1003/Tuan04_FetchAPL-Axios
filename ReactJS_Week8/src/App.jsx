import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompoA from './component/componentA';
import CompoB from './component/componentB';
import AuthAPISection from './component/AuthAPISection';
import CartProducts from './component/CartProducts';
import CartView from './component/CartView';
import LoginModal from './component/LoginModal';
import NotificationContainer from './component/NotificationContainer';
import ProductManager from './component/ProductManager';
import SearchBox from './component/SearchBox';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import UsersList from './component/UsersList';
import { login, logout } from './store/authSlice';
import { toggleTheme } from './store/themeSlice';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.value);
    const user = useSelector((state) => state.auth.user);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    useEffect(() => {
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={`app app--${theme}`}>
            <p>{user ? `Xin chao, ${user.username}` : 'Chua dang nhap'}</p>
            <h1>Redux Counter + Theme Toggle</h1>
            
            <button
                type="button"
                onClick={() => dispatch(toggleTheme())}
                className="theme-btn"
            >
                Chuyen sang {theme === 'light' ? 'Dark' : 'Light'}
            </button>
            {user ? (
                <button
                    type="button"
                    onClick={() => dispatch(logout())}
                    className="theme-btn"
                    style={{ marginLeft: '8px' }}
                >
                    Logout
                </button>
            ) : (
                <button
                    type="button"
                    onClick={() => setIsLoginModalOpen(true)}
                    className="theme-btn"
                    style={{ marginLeft: '8px' }}
                >
                    Login (gia lap)
                </button>
            )}
            <CompoA />
            <CompoB />

            <h2>Cart (Giỏ hàng)</h2>
            <CartProducts />
            <CartView />

            <h2>Todo List Global</h2>
            <TodoInput />
            <TodoList />

            <h2>Fetch Users (Global Async)</h2>
            <UsersList />

            <h2>Search + Debounce + API</h2>
            <SearchBox />

            <h2>Auth + API + Token</h2>
            <AuthAPISection />

            <h2>Mini App: Product Manager (Bài 10)</h2>
            <ProductManager />

            {isLoginModalOpen && (
                <LoginModal
                    onClose={() => setIsLoginModalOpen(false)}
                    onSubmit={(username) => {
                        dispatch(login(username));
                        setIsLoginModalOpen(false);
                    }}
                />
            )}
            <NotificationContainer />
        </div>
    );
};

export default App;