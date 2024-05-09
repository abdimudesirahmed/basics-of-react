import React from 'react';

interface ChildComponentProps {
  title: string;
  color: string;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ title, color }) => {
  return (
    <div className={`p-4 rounded-lg ${color}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-white mt-2">This is a child component.</p>
    </div>
  );
};

export default ChildComponent;