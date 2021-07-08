import React from 'react';
import styles from './TodoForm.module.css';
import Todo from './Todo';

const TodoForm = (props) => {
    console.log(props);
    let todoListElements = props.todoList.map(item => 
        <Todo 
            todo={item.todoText} 
            key={item.id} 
            id={item.id} 
            updateTodo={props.updateTodo}
        />);

    let newTodoElement = React.createRef();

    let addTodo = () => {
            props.addTodo();
    }

    let handleChange = () => {
        debugger
        let text = newTodoElement.current.value;
        props.updateNewTodo(text);
    }

    return (
        <div className={styles.todo_list}>
            <h1 >To Do List</h1>
            <div>
                <input className={styles.addTodo}
                    type="text" 
                    ref={newTodoElement}
                    value={props.newTodoText}
                    onChange={handleChange}
                    required
                />
                <button onClick={addTodo}>Add todo</button> 
            </div>
            <div>{todoListElements}</div>
        </div>
    )
}


export default TodoForm;
