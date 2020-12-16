interface AddTodoRequest {
  ownerId: string;
  content: string;
  parentTodoId: string | null;
  limitDatetime: number | null;
  groupId: string | null;
}

interface TodosFilter {
  [key: string]: string | undefined;
  userId: string;
  groupId?: string;
}
