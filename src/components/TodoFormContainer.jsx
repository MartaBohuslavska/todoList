import { addTodoActionCreator, updateNewTodoActionCreator, updateTodoActionCreator } from '../redux/todo-reducer';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';


const mapStateToProps = (state) => {
    return {
        todoList: state.todoListPage.todoList,
        newTodoText: state.todoListPage.newTodoText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewTodo: (text) => { 
            dispatch(updateNewTodoActionCreator(text));
        },
        addTodo: () => {
            dispatch(addTodoActionCreator());
        },
        updateTodo: (text) => { 
            dispatch(updateTodoActionCreator(text));
        }
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;
