const TodoComputer = ({ computerItemsLeft, cleanComplete }) => {
    return (
        <section className="flex justify-between px-4 py-4 bg-white rounded-b-md dark:bg-gray-800">
            <span className="text-gray-400">{computerItemsLeft} item left</span>
            <button className="text-gray-400" onClick={cleanComplete}>
                clear complement{" "}
            </button>
        </section>
    );
};

export default TodoComputer;
