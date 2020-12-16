interface AddTodoRequest {
  ownerId: string;
  content: string;
  parentTodoId: string | null;
  limitDatetime: number | null;
  groupId: string | null;
}

interface AddGroupRequest {
  groupName: string;
}

interface TodosFilter {
  userId: string;
  groupId?: string;
}
