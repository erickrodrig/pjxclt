import { useDarkMode } from "../contexts/DarkModeContext";
import GitHubInvertocatIcon from "../assets/github-mark.svg";
import GitHubInvertocatIconWhite from "../assets/github-mark-white.svg";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className="bg-slate-100 dark:bg-neutral-700 flex justify-center items-center px-5 sm:px-20 py-8">
      <div className="flex items-center space-x-4">
        <p className="dark:text-white">© 2023 github.com/erickrodrig/pjxclt</p>
        <a href="https://github.com/erickrodrig/pjxclt" target="_blank" rel="noreferrer" title="Contribua!">
          <img src={darkMode ? GitHubInvertocatIconWhite : GitHubInvertocatIcon} width="40" height="40" className="bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 dark:hover:from-indigo-500 dark:hover:to-pink-500 rounded-full" />
        </a>
      </div>
    </div>

  )
};

export default Footer;
