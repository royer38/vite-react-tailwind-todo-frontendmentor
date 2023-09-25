import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () =>{ 
  return (
  
    <div className="min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">Todo</h1>
        <button>  <MoonIcon className="fill-red-400"/>  </button>
        </div>
        <form className="flex gap-4 items-center px-4 overflow-hidden rounded-md bg-white py-4 mt-8">
          <span className="inline-block h-5 w-5 rounded-full border-2 "></span>
        <input type="text" placeholder="Create a new todo..."
         className="w-full text-gray-400 outline-none"/>
        </form>
      </header>


    <main className="container mx-auto mt-8 px-4">
    <div className="rounded-md bg-white [&>article]:p-4">
    <article className="flex gap-4 border-b border-b-gray-400">
    <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
    <p className="text-gray-600 grow">complete online javascript curse in bluuweb</p>
    <button className="flex-none"><CrossIcon/></button>  
    </article>

    <article className="flex gap-4 border-b border-b-gray-400">
    <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
    <p className="text-gray-600 grow">complete online javascript curse in bluuweb</p>
    <button className="flex-none"><CrossIcon/></button>  
    </article>

    <article className="flex gap-4 border-b border-b-gray-400">
    <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
    <p className="text-gray-600 grow">complete online javascript curse in bluuweb</p>
    <button className="flex-none"><CrossIcon/></button>  
    </article>

    <section className=" py-4 px-4 flex justify-between">
    <span className="text-gray-400 ">5 items left</span>
    <button className="text-gray-400">clear completed</button>  
    </section>

    </div>      
    </main> 


    <section className="container mx-auto mt-8 px-4">
      <div className="flex justify-center rounded-md bg-white p-4 gap-4">
      <button className="hover:text-blue-600"> all </button>
      <button className="hover:text-blue-600"> activate</button>
      <button className="hover:text-blue-600">completed</button>
      </div>
      
    </section>

    <p className="mt-8 text-center "> drag and drop to reorder list</p>
    </div>
);
};

export default App;