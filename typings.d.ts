interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "TODO" | "PROCESSING" | "DONE";

interface Column {
  id: TypedColumn;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
}

interface Image {
  buckedId: string;
  fileId: string;
}
