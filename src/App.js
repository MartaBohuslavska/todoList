import './App.css';
import TodoFormContainer from './components/TodoFormContainer';

const App = (props) => {
  return (
    <div className="to-do-list">
      <TodoFormContainer store={props.store} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
