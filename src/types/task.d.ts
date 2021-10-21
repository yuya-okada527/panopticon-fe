type Task = {
  id: number;
  name: string;
  status: "todo" | "doing" | "done";
};

type SearchTasksResponse = {
  page: number;
  available_page: number;
  num: number;
  hit_num: number;
  results: Task[];
};
