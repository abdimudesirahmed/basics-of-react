import React from "react";
import { Fragment } from "react";
function ListGroup(){
    const items =['New York', 'San Francisco', 'Tokyo ', 'paris '];
    return(
    <>
    <h1 className="text-yellow-300 font-bold text-center text-3xl bg-slate-400">List</h1>
        <ul className="space-y-2">
    <li className="group flex items-center">
      <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
      <span className="font-bold text-green-500">Item 1</span>
    </li>
    <li className="group flex items-center">
      <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
      <span className="font-bold text-blue-500">Item 2</span>
    </li>
    <li className="group flex items-center">
      <span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span>
      <span className="font-bold text-red-500">Item 2</span>
    </li>
    <li className="group flex items-center">
      <span className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></span>
      <span className="font-bold  text-yellow-500 ">Item 2</span>
    </li>
    
  </ul>;
</>);
}
export default ListGroup;