interface ActionResult {
  ok: boolean;
  message?: string;
  error_message?: string;
}

interface HttpResponse<T> {
  ok: boolean;
  error_message?: string;
  result?: T;
}
