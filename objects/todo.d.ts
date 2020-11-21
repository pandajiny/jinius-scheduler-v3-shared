interface TodoItem extends DatabaseObject {
  content: string;
  isComplete: boolean;
  parentId: string | nul;
  createTime: number;
<<<<<<< HEAD
  endTime: number | null;
=======
  end_time: number;
  group_id: string;
>>>>>>> 426bea638b3b720cd9925c66dc6aaa9c2467a72d
}
