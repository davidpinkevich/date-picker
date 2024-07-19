export interface TypeTodo {
  text: string;
  resolve: boolean;
}

export interface PropsTodoItem {
  text: string;
  resolve: boolean;
  handleStatusChange: () => void;
  handleDeleteTodo: () => void;
}
