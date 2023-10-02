import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({todo, removeTodo, updateTodo}) => { 
//se desestructura el prop para trabajarlo por partes
    const {id, title, completed} = todo 

    return(
<article className="flex gap-4 border-b border-b-gray-400  ">
    <button className={` h-5 w-5 flex-none rounded-full border-2 ${completed ? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" : "inline-block "}`}
    onClick={() => updateTodo(id)}
    >
        { 
            completed && <IconCheck/>
        }
        </button>
    <p className={`text-gray-600 dark:text-gray-400 grow ${completed && "line-through"}`}> {title} </p>
    <button className="flex-none" onClick={() => removeTodo(id)}><IconCross/></button>  
    </article>
    );
 };
 export default TodoItem;

 //lo que se hace con el boton de check, es una interpolacion, nos sirve para poder meter funciones de javascrip dentro de nuestro template
 //if = ?, else = :

 //la clase dark: nos sirve para detectar las preferencias del sistema y en automatico las pinta en negro