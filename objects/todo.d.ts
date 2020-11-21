interface TodoItem extends DatabaseObject {
  content: string;
  isComplete: boolean;
  parentId: string | nul;
  createTime: number;
  endTime: number | null;
}
