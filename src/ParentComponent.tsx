import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
      <div className="grid grid-cols-2 gap-4">
        <ChildComponent title="Child 1" color="bg-blue-500" />
        <ChildComponent title="Child 2" color="bg-red-500" />
        <ChildComponent title="Child 3" color="bg-green-500" />
        <ChildComponent title="Child 4" color="bg-yellow-500" />
      </div>
    </div>
  );
};

export default ParentComponent;