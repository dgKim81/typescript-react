import React, { useState } from 'react';
// import { Route } from 'react-router-dom';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

import { Todo } from './todo.module';

const data: Todo[]  = [{id: 't1', text: 'Finish the course'}];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(data);

  const addItems = (text: string) => {
    setTodos(prevTodos => { 
      let idx = 1;
      const pTodos: Todo[] = prevTodos || [];
      if (prevTodos && prevTodos.length > 0) {
        idx = prevTodos
        .flatMap(value => parseInt((value.id || "t0").substring(1)))
        .reduce((aItm, cItm, idx, arr) => aItm > cItm ? aItm : cItm );
      } 
      
      const tItm: Todo = {
        id: `t${idx + 1}`,
        text: text
      };

      return [...pTodos, tItm];

    });
  };

  const deleteItem = (id: string) => {
    setTodos(prevTodos => [...prevTodos.filter(itm => itm.id !== id)]);
  }

  return (
    <div className="App">
      <NewTodo addTodoItem={addItems} />
      <TodoList items={todos} deleteTodoItem={deleteItem}/>
    </div>
  );
}

export default App;
