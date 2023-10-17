import { useDarkMode } from "../contexts/DarkModeContext";
import GitHubInvertocatIcon from "../assets/github-mark.svg";
import GitHubInvertocatIconWhite from "../assets/github-mark-white.svg";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className="bg-neutral-200 dark:bg-neutral-700 flex justify-between items-center px-5 sm:px-20 py-8">
      <div></div> {/* placeholder div */}
      <a href="https://github.com/erickrodrig/pjxclt" target="_blank" rel="noreferrer" title="Contribua!">
        <img src={darkMode ? GitHubInvertocatIconWhite : GitHubInvertocatIcon} width="48" height="48" className="hover:bg-white dark:hover:bg-gray-github rounded-full" />
      </a>
    </div>

  )
};

export default Footer;
