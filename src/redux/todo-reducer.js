const ADD_TODO = 'ADD_TODO';
const UPDATE_NEW_TODO = 'UPDATE_NEW_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

let initialState = {
    todoList: [],
    newTodoText: 'add todo'
};

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            let newTodo = {
                todoText: state.newTodoText,
                id: state.todoList.length
            };
           return {
                ...state,
                newTodoText: '',
                todoList: [...state.todoList, newTodo]
            }
        case UPDATE_NEW_TODO: 
            return {
                ...state,
                newTodoText: action.newText
            }
        case UPDATE_TODO: 
            return {
                ...state,
                updateTodoText: action.updateText
            }      
        default:
            return state;
    }
}

export const addTodoActionCreator = () => ({
    type: ADD_TODO
});
export const updateNewTodoActionCreator = (text) => ({
    type: UPDATE_NEW_TODO, 
    newText: text
});
export const updateTodoActionCreator = (text) => ({
    type: UPDATE_TODO, 
    updateText: text
});

export default todoReducer;
