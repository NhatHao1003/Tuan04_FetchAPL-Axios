import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../store/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState(todo.text);

  const handleSave = () => {
    const value = draftText.trim();
    if (!value) {
      return;
    }

    dispatch(updateTodo({ id: todo.id, text: value }));
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={draftText}
          onChange={(event) => setDraftText(event.target.value)}
          className="todo-input"
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div>
        {isEditing ? (
          <button type="button" className="theme-btn" onClick={handleSave}>
            Luu
          </button>
        ) : (
          <button
            type="button"
            className="theme-btn"
            onClick={() => setIsEditing(true)}
          >
            Sua
          </button>
        )}

        <button
          type="button"
          className="theme-btn"
          style={{ marginLeft: '8px' }}
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Xoa
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
