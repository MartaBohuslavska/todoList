import React from 'react';
import styles from './Todo.module.css';

class Todo extends React.Component  {
    state = {
        editMode: false,
        todo: this.props.todo
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActiveEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateTodo(this.state.todo)
    }

    handleChange = (e) => {
        this.setState({
            todo: e.currentTarget.value
        });
    }

    render () {
        return (
            <div className={styles.todoElement}>
                {!this.state.editMode &&
                    <div>
                        <ul>
                            <li onDoubleClick={this.activeEditMode.bind(this)}>
                                {this.state.todo}
                            </li>
                        </ul>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input className={styles.updateTodo}
                            onChange={this.handleChange} 
                            autoFocus={true} 
                            onBlur={this.deActiveEditMode.bind(this)} 
                            type="text" 
                            value={this.state.todo}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Todo;
