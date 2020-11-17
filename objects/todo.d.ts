interface TodoItem extends DatabaseObject {
  content: string;
  isComplete: boolean;
  parentId?: string;
  createTime: number;
}
