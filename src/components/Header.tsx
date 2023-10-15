import { useDarkMode } from "../contexts/DarkModeContext";
import DarkModeIcon from "../assets/icons8-moon-48.png";
import LightModeIcon from "../assets/icons8-sun.svg";

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <header className="bg-neutral-200 dark:bg-neutral-700 py-8 relative">
      <button className="absolute right-20 top-1/2 transform -translate-y-1/2 p-2 rounded-md hover:bg-neutral-500 dark:hover:bg-neutral-100 dark:text-white transition"
        onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? LightModeIcon : DarkModeIcon} width="32" height="32" title={darkMode ? "Modo claro" : "Modo escuro"} alt="Ativar/desativar modo escuro" />
      </button>
      <div className="text-center">
        <h1 className="text-5xl dark:text-white font-bold">PJ x CLT</h1>
      </div>
    </header>
  )
};

export default Header;
