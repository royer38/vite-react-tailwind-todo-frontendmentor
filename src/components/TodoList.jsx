import TodoItem from "./TodoItem";
const TodoList = ({todos, removeTodo, updateTodo}) => { 
return (

    <div className="rounded-t-md bg-white overflow-hidden transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4 mt-8">
    
{todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
))}
    </div>
);

 };

 export default TodoList;

 //el overflow nos sirve para tener todos los elementos bien odenados en la caja, por si el texto con contenido se desborda
 //podemos usar hiden (oculta lo que se desborda) scroll (añade una barrita para poder bajar con el scroll)