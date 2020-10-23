interface TodoItem extends DatabaseObject {
  content: string;
  isComplete: boolean;
  parentId?: string;
  createTime: number;
  endTime?: number;
}

interface AddTodoItemRequest {
  owner: string;
  content: string;
  isComplete: boolean;
  parentId?: string;
  endTime?: number;
}
