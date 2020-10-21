interface LoginRequest {
  email: string;
  _password: string;
}

interface LoginResult {
  access_token: string;
}

interface SignUpRequest {
  name: string;
  email: string;
  _password: string;
}
