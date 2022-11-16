
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: boolean;
};

const Todos: Todo[] = [
  {
    id: 1,
    title: "eat breakfast",
    completed: false,
    priority: false
  },
  {
    id: 2,
    title: "do laundry",
    completed: false,
    priority: false
  }
];

export default Todos;
