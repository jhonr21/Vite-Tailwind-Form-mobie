const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8 rounded-b-md ">
            <div className="flex justify-center gap-4 p-3 bg-white rounded-md dark:bg-gray-800">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>

                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                    }`}
                    onClick={() => changeFilter("completed")}
                >
                    Complete
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
