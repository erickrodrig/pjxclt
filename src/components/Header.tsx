import { useDarkMode } from "../contexts/DarkModeContext";
import DarkModeIcon from "../assets/icons8-moon-48.png";
import LightModeIcon from "../assets/icons8-sun.svg";

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="bg-slate-100 dark:bg-neutral-700 py-8 flex justify-between items-center pl-20 space-x-4 pr-5 sm:pr-20">
      <h1 className="text-4xl dark:text-white">PJ x CLT</h1>
      <button className="p-2 rounded-md hover:bg-gray-500 dark:hover:bg-yellow-100 dark:text-white transition"
        onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? LightModeIcon : DarkModeIcon} width="32" height="32" title={darkMode ? "Modo claro" : "Modo escuro"} alt="Ativar/desativar modo escuro" />
      </button>
    </div>
  )
};

export default Header;
