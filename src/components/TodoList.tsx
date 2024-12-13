import React from 'react';
import './TodoList.css';

interface TodoItemProp {
    items : {
        id: string;
        text: string;
    }[];
    deleteTodoItem: (id: string) => void;
}

const TodoList: React.FC<TodoItemProp> = (prop: TodoItemProp) => {
    const clickHandler = (key: string) => {
        prop.deleteTodoItem(key);
    };

    return (
    <ul>
        {prop.items.map((todo) => {
            return <li key={todo.id}>
                <span>{todo.text}</span>
                <button type="button" onClick={clickHandler.bind(null, todo.id)}>delete Me</button>
            </li>;
        })}
    </ul>
    );
};

export default TodoList;