interface AddTodoItemRequest {
  owner: string;
  content: string;
  isComplete: boolean;
  parentId: string | null;
  endTime: number | null;
  groupId: string | null;
}

interface AddGroupRequest {
  groupName: string;
}

interface TodosFilter {
  groupId?: string;
}
