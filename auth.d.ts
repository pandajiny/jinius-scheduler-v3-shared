interface LoginRequest {
  email: string;
  _password: string;
}

interface LoginResult {
  access_token: string;
}

interface SignUpRequest {
  email: string;
  _password: string;
}

interface JwtPayload {
  uid: string;
  email: string;
}
