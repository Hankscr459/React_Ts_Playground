import React, { FC } from 'react'

interface TodoListProps {
    items: {id: string, text: string}[]
    onDeleteTodo: (id: string) => void
}
// onClick={() => props.onDeleteTodo(todo.id)}
const TodoList: FC<TodoListProps> = (props) => {
    
    return (
        <ul>
            {props.items.map(todo => 
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
                </li>
            )}
        </ul>
    )
}

export default TodoList