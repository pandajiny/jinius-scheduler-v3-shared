interface TodoItem extends DatabaseObject {
  content: string;
  isComplete: boolean;
  parentId?: string;
}

interface AddTodoItemRequest {
  owner: string;
  content: string;
  isComplete: boolean;
  parentId?: string;
}
