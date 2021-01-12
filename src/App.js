import react, {useState} from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoItem from './components/TodoItem';
import TodosList from './components/TodosList';

function App() {

  const [todos, setTodos] = useState([
    {body: 'Create todo list', completed: false},
    {body: 'Take out trash', completed: true}
  ]);

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const updateTodo = (idx) => {
    const copyTodos = [...todos];
    copyTodos[idx].completed = !copyTodos[idx].completed;
    setTodos(copyTodos);
  }
  
  const deleteTodo = (deleteIdx) => {
    setTodos(todos.filter((todo, i) => i != deleteIdx ? true : false))
  }
  

  return (
    <div className="App">
      <h1>App</h1>
      <NewTodo createTodo={createTodo} />
      <TodosList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
