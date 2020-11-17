interface LoginResult {
  access_token: string;
}

// basic action result
interface ActionResult {
  ok: boolean;
  message?: string;
  error_message?: string;
}
