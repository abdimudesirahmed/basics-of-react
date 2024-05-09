import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>
      <p className="text-3xl font-bold">{count}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;