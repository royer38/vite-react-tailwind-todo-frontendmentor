const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
return(

<section className="dark:bg-gray-800 py-4 px-4 flex justify-between bg-white rounded-b-md transition-all duration-1000">
    <span className="text-gray-400 ">{computedItemsLeft} items left</span>
    <button className="text-gray-400" onClick={clearCompleted}>clear completed</button>  
    </section>
);
};

export default TodoComputed;