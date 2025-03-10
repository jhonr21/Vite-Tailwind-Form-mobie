import TodoItem from "./TodoItems";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(provided) => (
                <div
                    className="mt-8 rounded-t-md bg-white dark:bg-gray-900 [&>article]:p-4"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            draggableId={`${todo.id}`}
                            index={index}
                        >
                            {(draggableProvided) => (
                                <TodoItem
                                    todo={todo}
                                    removeTodo={removeTodo}
                                    updateTodo={updateTodo}
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.draggableProps}
                                    {...draggableProvided.dragHandleProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
