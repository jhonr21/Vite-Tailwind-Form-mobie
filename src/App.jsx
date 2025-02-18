import bgMobileLight from "./assets/images/bg-mobile-light.jpg"; // Importamos la imagen
import CrossIcon from "./components/icon/CrossIcon";
import MoonIcom from "./components/icon/MoonIcom";

const App = () => {
    return (
        <div
            className="min-h-screen bg-gray-200 bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${bgMobileLight})` }} // Usamos style en línea
        >
            <header className="container px-4 mx-auto">
                <div className="flex justify-between">
                    <h1 className="pt-8 text-3xl font-semibold text-white uppercase tracking-[0.3em]">
                        Todo
                    </h1>
                    <button className="">
                        <MoonIcom />
                    </button>
                </div>

                <form className="flex items-center gap-4 px-4 py-4 mt-8 overflow-hidden bg-white rounded-md">
                    <span className="inline-block w-5 h-5 border-2 rounded-full"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Create a new todo... "
                    />
                </form>
            </header>

            <main className="container px-4 mx-auto mt-8 ">
                <div className="bg-white rounded-md [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="flex-none inline-block w-5 h-5 border-2 rounded-full"></button>
                        <p className="text-gray-600 grow">
                            complete online javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            {" "}
                            <CrossIcon />{" "}
                        </button>
                    </article>

                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="flex-none inline-block w-5 h-5 border-2 rounded-full"></button>
                        <p className="text-gray-600 grow">
                            complete online javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            {" "}
                            <CrossIcon />{" "}
                        </button>
                    </article>

                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="flex-none inline-block w-5 h-5 border-2 rounded-full"></button>
                        <p className="text-gray-600 grow">
                            complete online javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            {" "}
                            <CrossIcon />{" "}
                        </button>
                    </article>

                    <section className="flex justify-between px-4 py-4">
                        <span className="text-gray-400">5 item left</span>
                        <button className="text-gray-400">
                            clear complement{" "}
                        </button>
                    </section>
                </div>
            </main>

            <section className="container px-4 mx-auto mt-8">
                <div className="flex justify-center gap-4 p-3 bg-white rounded-md ">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Complete</button>
                </div>
            </section>

            <p className="mt-8 text-center">Drag and drop to render list</p>
        </div>
    );
};

export default App;
