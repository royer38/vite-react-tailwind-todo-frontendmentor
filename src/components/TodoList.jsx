import {Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";
const TodoList = ({todos, removeTodo, updateTodo}) => { 
return (
    //el dropable necesita un id en string, esto para identificar los objetos
<Droppable droppableId="todos">
    {(droppableProvided) => (
        //el ref lo pide el droppable para invocar el inneref y debe ir en nuestri objeto 
<div ref={droppableProvided.innerRef}
{...droppableProvided.droppableProps} 
className="rounded-t-md bg-white overflow-hidden transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4 mt-8">    
{todos.map((todo, index) => (
        <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
            {
                (draggableProvided) => (
                        <TodoItem
                        todo={todo}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        {...draggableProvided.draggableProps}
                        />
                    )
            }
        </Draggable>
))}

{/*esto nos reserva el espacio de los elemento, para no deformar la caja de elementos*/}
{droppableProvided.placeholder}
    </div>
                                )
    }
</Droppable>
);

 };
 export default TodoList;






 //el overflow nos sirve para tener todos los elementos bien odenados en la caja, por si el texto con contenido se desborda
 //podemos usar hiden (oculta lo que se desborda) scroll (añade una barrita para poder bajar con el scroll)