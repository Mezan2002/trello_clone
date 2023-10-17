import { useBoardStore } from "@/store/BoardStore";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "../TodoCard/TodoCard";

type Props = {
  id: TypedColumn;
  index: number;
  todos: Todo[];
};

const idToColumnText: { [key in TypedColumn]: string } = {
  TODO: "To Do",
  PROCESSING: "Processing",
  DONE: "Done",
};

const Column = ({ id, index, todos }: Props) => {
  const [searchString] = useBoardStore((state) => [state.searchString]);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className="flex items-center justify-between px-2 text-xl font-bold">
                  {idToColumnText[id]}{" "}
                  <span className="text-gray-500 bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center text-sm">
                    {!searchString
                      ? todos.length
                      : todos.filter((todo) =>
                          todo.title
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ).length}
                  </span>{" "}
                </h2>

                <div className="space-y-2">
                  {todos.map((todo, index) => {
                    if (
                      searchString &&
                      !todo.title
                        .toLocaleLowerCase()
                        .includes(searchString.toLocaleLowerCase())
                    )
                      return null;
                    return (
                      <Draggable
                        key={todo.$id}
                        index={index}
                        draggableId={todo.$id}
                      >
                        {(provided) => (
                          <TodoCard
                            todo={todo}
                            index={index}
                            id={id}
                            innerRef={provided.innerRef}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                  <div className="flex items-end justify-end p-2">
                    <button className="text-green-500 hover:text-green-600">
                      <PlusCircleIcon className="h-10 w-10 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
