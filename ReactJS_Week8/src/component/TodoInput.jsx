import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    const value = text.trim();
    if (!value) {
      return;
    }

    dispatch(addTodo(value));
    setText('');
  };

  return (
    <form onSubmit={handleAddTodo} className="todo-input-wrap">
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Nhap todo..."
        className="todo-input"
      />
      <button type="submit" className="theme-btn">
        Them
      </button>
    </form>
  );
};

export default TodoInput;
