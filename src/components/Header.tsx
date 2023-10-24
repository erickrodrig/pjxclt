import { useDarkMode } from "../contexts/DarkModeContext";
import DarkModeIcon from "../assets/images/icons8-moon-48.png";
import LightModeIcon from "../assets/images/icons8-sun.svg";
import ProfitIcon from "../assets/images/profit.png";

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="bg-slate-100 dark:bg-neutral-700 py-8 flex justify-between items-center pl-20 space-x-4 pr-5 sm:pr-20">
      <div className="inline-flex">
        <img src={ProfitIcon} width="64" height="64" alt="ícone de uma calculadora e uma bolsa de dinheiro" />
        <h1 className="font-medium text-4xl dark:text-white ml-4 pt-2">PJ x CLT</h1>
      </div>
      <h1 className="text-red-600 text-5xl font-bold">!!! WORK IN PROGRESS !!!</h1>
      <button className="p-2 rounded-xl hover:bg-gray-500 dark:hover:bg-yellow-100 dark:text-white transition"
        onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? LightModeIcon : DarkModeIcon} width="32" height="32" title={darkMode ? "Modo claro" : "Modo escuro"} alt="Ativar/desativar modo escuro" />
      </button>
    </div>
  )
};

export default Header;
