import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText,
      };

      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const handleRemoveTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditingText(text);
  };

  const handleUpdateTodo = () => {
    if (editingTodoId !== null && editingText.trim() !== '') {
      const updatedTodos = todos.map(todo =>
        todo.id === editingTodoId ? { ...todo, text: editingText } : todo
      );
      setTodos(updatedTodos);
      setEditingTodoId(null);
      setEditingText('');
    }
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditingText('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-l px-4 py-2 w-full"
          placeholder="Enter a task"
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between mb-2">
            {editingTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={editingText}
                  onChange={event => setEditingText(event.target.value)}
                />
                <div>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    onClick={handleUpdateTodo}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <div>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleEditTodo(todo.id, todo.text)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleRemoveTodo(todo.id)}
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;