interface LoginRequest {
  email: string;
  password: string;
}

interface HashedLoginRequest {
  email: string;
  _password: string;
}

interface LoginResult {
  access_token: string;
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

interface JwtPayload {
  uid: string;
  email: string;
}
