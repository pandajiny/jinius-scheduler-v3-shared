interface Group {
  group_id: string;
  group_name: string;
  owner_id: string;
  create_time: number;
}

interface GroupDTO {
  group_id: string;
  group_name: string;
  owner_id: string;
  create_time: number;
  item_count: number;
}
