import { useState } from "react";

const TodoCreate = ({createTodo}) => {

const [title, setTitle] = useState('');

    //siempre debe recibir el e
    const handleSubmitAddTodo = (e) => { 
e.preventDefault();

//el trim es para limpiar espacios en blanco
//si el usuario pone puros espacios, entra en el if, y no se agrega y solo se reinicia
if(!title.trim()){
 return setTitle("");
}
//en caso de escribir una letra se agrega el todo y con la funcion agregamos el titulo y creamos la tarea
createTodo(title);
setTitle("");

//reinicia la caja de texto al dar enter

    }

    return (
//el onsubmit es por que no tenemos un boton de guardar, asi que al dar enter nos guarda los datos
<form onSubmit={handleSubmitAddTodo} className="dark:bg-gray-800 flex gap-4 items-center px-4 overflow-hidden rounded-md bg-white py-4 transition-all duration-1000 ">
          <span className="inline-block h-5 w-5 rounded-full border-2 "></span>
        <input type="text" placeholder="Create a new todo..."
         className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         
         />
        </form>
    );

};

export default TodoCreate;