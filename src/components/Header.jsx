import MoonIcon from "./icon/IconMoon";
import SunIcon from "./icon/IconSun";

const Header = ({ toggleDarkMode, darkMode }) => {
    return (
        <header className="container px-4 mx-auto">
            <div className="flex justify-between">
                <h1 className="pt-8 text-3xl font-semibold text-white uppercase tracking-[0.3em]">
                    Todo
                </h1>
                <button onClick={toggleDarkMode} className="pt-8">
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
