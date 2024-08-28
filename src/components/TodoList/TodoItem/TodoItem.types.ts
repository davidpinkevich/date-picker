export interface TypeTodo {
  text: string;
  resolve: boolean;
  id: number;
}

export interface PropsTodoItem {
  text: string;
  resolve: boolean;
  handleStatusChange: () => void;
  handleDeleteTodo: () => void;
}
