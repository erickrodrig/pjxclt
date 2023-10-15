import { useDarkMode } from "../contexts/DarkModeContext";
import GitHubInvertocatIcon from "../assets/github-mark.svg";
import GitHubInvertocatIconWhite from "../assets/github-mark-white.svg";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer className="bg-neutral-200 dark:bg-neutral-700 py-12">
      <a href="https://github.com/erickrodrig/pjxclt" target="_blank" rel="noreferrer" title="GitHub" className="absolute right-20 -translate-y-1/2 p-2 ">
        <img src={darkMode ? GitHubInvertocatIconWhite : GitHubInvertocatIcon} width="48" height="48" />
      </a>
    </footer>
  )
};

export default Footer;
