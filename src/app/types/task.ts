export interface Task {
  title: string,
  assignee: {
    name:string
  } | null
}
