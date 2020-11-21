interface TodoItem extends DatabaseObject {
  content: string;
  isComplete: boolean;
  parentId?: string;
  createTime: number;
  end_time: number;
  group_id: string;
}
