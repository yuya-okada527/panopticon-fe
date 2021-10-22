export type Status = "todo" | "doing" | "done";

export type Task = {
  id: number;
  name: string;
  status: Status;
};

export type SearchTasksResponse = {
  page: number;
  available_page: number;
  num: number;
  hit_num: number;
  results: Task[];
};
