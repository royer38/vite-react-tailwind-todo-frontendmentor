import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

//const initialStateTodo = [
  //{
//id: 1, title: "complete online javascript bluuweb curse", completed: true
  //},
  //{
//id: 2, title: "go to the gym", completed: false
  //},
  //{
//id: 3, title: "10min meditando", completed: true
  //},
  //{
//id: 4, title: "pick up groseries", completed: false
  //},
  //{
//id: 5, title: "complete todo app on frontend mentor", completed: false
  //},
//];

const initialStateTodo = JSON.parse(localStorage.getItem("todos")) || [];

const App = () =>{ 

const [todos, setTodos] = useState(initialStateTodo);
//nos puede servir para esta pendiente de algun dato (todos, contiene todos nuestros valores)
//nos genera una llave con un string, todo lo que guardemos es string y nos sirve para mandar los datos en formato json
useEffect (() => {
localStorage.setItem("todos", JSON.stringify(todos));
},[todos]);

const createTodo = (title) => {
  const newTodo = {
    id: Date.now(), 
    title: title.trim(),
    completed: false,
  };
  //clona todos los datos y agrega otro to do
  setTodos ([...todos, newTodo]);
};

const removeTodo = (id) => {
  setTodos(todos.filter((todo)=> todo.id !== id));
};

const updateTodo = (id) => {
setTodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed } : todo))

};
//esto solo pasa un digito, no es una funcion
const computedItemsLeft = todos.filter((todo) => !todo.completed).length;
//este si es un metodo
const clearCompleted = () => {
  setTodos(todos.filter((todo) => !todo.completed));
};
//filter es un estado que toma los caracteres de all, active, complete
const [filter, setFilter] = useState ("all");

const changeFilter = (filter) => setFilter(filter); 

//creamos el meotodo que va a filtrar
const filteredTodos = ()  => {
  switch (filter){
    case "all": return todos;
    case "active": return todos.filter((todo)=> !todo.completed);
    case "completed": return todos.filter((todo)=> todo.completed);
    default: return todos;
  }
}

  return (
    <div className="dark:bg-gray-900 min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000
    md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">
      <Header/>
    <main className="container mx-auto mt-8 px-4 md:max-w-xl ">
    {/*todo create todos son componentes*/}
    <TodoCreate createTodo= {createTodo}/>
    {/* todo list(todoitem)  todoupdate y tododelete*/}
    <TodoList todos= {filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>      
    {/*todo computed */}
    <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
    {/*todo filter */}
    <TodoFilter changeFilter={changeFilter} filter={filter}/>
    </main> 
    <footer className="mt-8 text-center dark:text-gray-400"> drag and drop to reorder list</footer>
    </div>
);
};

export default App;

//los componentes deben ir en mayusculas, para diferenciarlos de etiquetas html