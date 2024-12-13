import React, { useRef } from "react";
import './NewTodo.css';

interface NewTodoProp {
    addTodoItem(text: string): void;
}

const NewTodo: React.FC<NewTodoProp> = (prop) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const addTodoItemFn = prop.addTodoItem;

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    
    const enteredText = textInputRef.current?.value;
    console.log(enteredText);
    if (enteredText != null)
        addTodoItemFn(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
