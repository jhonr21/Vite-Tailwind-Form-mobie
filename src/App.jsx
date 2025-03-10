import { useState, useEffect } from "react";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";
import bgMobileDark from "./assets/images/bg-mobile-dark.jpg";
import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";
import Header from "./components/Header";
import TodoComputer from "./components/TodoComputer";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialStateTodo = [
    { id: 1, title: "Go to the gym", completed: true },
    { id: 2, title: "Complete online JavaScript", completed: false },
    { id: 3, title: "10 min meditation", completed: false },
    { id: 4, title: "Complete todo app Frontend", completed: true },
    { id: 5, title: "Complete Gym", completed: true },
];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodo);
    const [filter, setFilter] = useState("all");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (
            storedTheme === "dark" ||
            (!storedTheme &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("theme", newDarkMode ? "dark" : "light");

        if (newDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const createTodo = (title) => {
        if (!title.trim()) return;
        setTodos([
            ...todos,
            { id: Date.now(), title: title.trim(), completed: false },
        ]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const computerItemsLeft = todos.filter((todo) => !todo.completed).length;

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const cleanComplete = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const changeFilter = (newFilter) => setFilter(newFilter);

    const filteredTodos = () => {
        switch (filter) {
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <div
            className={`min-h-screen bg-gray-300 bg-no-repeat bg-cover ${
                darkMode ? "dark bg-gray-900" : ""
            }`}
            style={{
                backgroundImage: `url(${
                    darkMode
                        ? window.innerWidth > 640
                            ? bgDesktopDark
                            : bgMobileDark
                        : window.innerWidth > 640
                          ? bgDesktopLight
                          : bgMobileLight
                })`,
            }}
        >
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

            <main className="container max-w-xl px-4 mx-auto mt-8">
                <TodoCreate createTodo={createTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filteredTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                </DragDropContext>

                <TodoComputer
                    computerItemsLeft={computerItemsLeft}
                    cleanComplete={cleanComplete}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center dark:text-gray-400">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
