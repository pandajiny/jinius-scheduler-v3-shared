interface User {
  uid: string;
  name: string;
  email: string;
}

interface UserInformation {
  name: string;
  email: string;
}

interface RequestUser {
  email: string;
  uid: string;
  iat: number;
  exp: number;
}
