import MoonIcon from "./icon/IconMoon";
import SunIcon from "./icon/IconSun";

const Header = ({ toggleDarkMode, darkMode }) => {
    return (
        <header className="container px-4 mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="pt-8 text-3xl font-semibold text-white uppercase tracking-[0.3em]">
                    Todo
                </h1>
                <button onClick={toggleDarkMode} className="pt-8">
                    <span className="inline-flex items-center gap-2 px-4 py-2 font-medium text-gray-800 transition-colors border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
                        {darkMode ? <SunIcon /> : <MoonIcon />}
                        {darkMode ? "Modo Claro" : "Modo Oscuro"}
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;
