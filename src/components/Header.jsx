import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";
//aca obtenemos el modo del local storage, si es verdadero se queda en dark, sino nos manda al light
//tambien, como al inicio no existe el theme en el local, es decir al iniciar por primera vez, crea el theme en light, pues el state es para el dark, por lo que regresara un valor false y pasa a light
const inicialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => { 

  const [darkMode, setDarkMode] = useState (inicialStateDarkMode);
//este es un hook para usar state
//solo se ejecuta una vez, cada que se renderiza la app
//esto accede directamente al hmtl, no a la propiedas de js
  useEffect (() => {
    if (darkMode){
document.documentElement.classList.add("dark");
localStorage.setItem("theme", "dark");
    } else {
document.documentElement.classList.remove("dark");
localStorage.setItem("theme", "light");

    }
  }, [darkMode]);

  return(
    <header className="container mx-auto px-4 pt-8 md:max-w-xl ">
        <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">Todo</h1>
        <button onClick={ () => setDarkMode(!darkMode) }>  
        
{
  darkMode ? <IconSun/> : <IconMoon/>
}

        </button>
        </div>
        
      </header>

);

 }

 export default Header;

 //doble clic + ctrl+espacio y nos trae el componente (lo usamos con el IconMoon)