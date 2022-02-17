
import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const makeTodo = () => {
    const todos = [];
    for (let i = 1; i <= 10; i++) {
        todos.push({ id: i, text: `${i}번째 할 일`, done: false });
    }
    return todos;
}

const TodoTemplate = () => {
    const [todoList, setTodoList] = useState(makeTodo());

    // 함수
    // update는 map delete는 filter
    const updateTodo = (id) => todoList.map(todo => {
        const todos = { todo };
        if (todos.id === id) {
            return { ...todos, done: !todos.done }
        } else {
            return todos;
        }
        setTodoList(todos);
    })

    return (
        <div>
            <h3>Todo List</h3>

            <TodoForm />
            <hr />
            <TodoList todoList={todoList} />

        </div>
    )
}
export default TodoTemplate;