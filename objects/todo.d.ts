interface TodoItem extends DatabaseObject {
  content: string;
  isComplete: boolean;
  parentId: string | nul;
  createTime: number;
  end_time: number;
  group_id: string;
}
