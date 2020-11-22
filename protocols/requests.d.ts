// request with not hashed password from frontend
interface LoginRequest {
  email: string;
  password: string;
}

// request with haashed password
interface HashedLoginRequest {
  email: string;
  _password: string;
}

interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

interface HashedSignUpRequest {
  name: string;
  email: string;
  _password: string;
}

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
