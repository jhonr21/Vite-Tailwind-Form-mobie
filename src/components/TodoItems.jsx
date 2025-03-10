import React from "react";
import IconCheck from "./icon/IconCheck";
import CrossIcon from "./icon/IconCross";

const TodoItems = React.forwardRef(
    ({ todo, updateTodo, removeTodo, ...props }, ref) => {
        const { id, title, completed } = todo;
        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-800"
            >
                {/* <button className="flex-none inline-block w-5 h-5 border-2 rounded-full">
                <IconCheck />
            </button> */}

                <button
                    className={`flex-none w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                        completed
                            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            : "border-gray-400"
                    }`}
                    onClick={() => updateTodo(id)}
                >
                    {completed && <IconCheck className="text-white" />}
                </button>

                <p
                    className={`text-gray-400 grow ${completed && "line-through"}`}
                >
                    {title}
                </p>
                <button onClick={() => removeTodo(id)} className="flex-none">
                    <CrossIcon />{" "}
                </button>
            </article>
        );
    }
);

export default TodoItems;
