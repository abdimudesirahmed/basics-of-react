import React from "react";
import ListGroup from "./components/ListGroup";
import ParentComponent from "./ParentComponent";
import Counter from "./Counter";
import TodoApp from "./TodoApp";
import LoginForm from "./LoginForm";
import TodoApp2 from "./TodoApp2";
function App(){
  return <div> <ListGroup/>
  <ParentComponent />
  <Counter />
  <TodoApp />
  <LoginForm />
  <TodoApp2 />
  </div>;
}
export default App;