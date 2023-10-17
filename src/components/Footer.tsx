import { useDarkMode } from "../contexts/DarkModeContext";
import GitHubInvertocatIcon from "../assets/github-mark.svg";
import GitHubInvertocatIconWhite from "../assets/github-mark-white.svg";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
        <p className="dark:text-white">© 2023 github.com/erickrodrig/pjxclt</p>
      <a href="https://github.com/erickrodrig/pjxclt" target="_blank" rel="noreferrer" title="Contribua!">
        <img src={darkMode ? GitHubInvertocatIconWhite : GitHubInvertocatIcon} width="48" height="48" className="hover:bg-white dark:hover:bg-gray-github rounded-full" />
      </a>
    </div>

  )
};

export default Footer;
