interface NavItem {
  type: "TIME" | "GROUP";
  title: string;
  pathname: string;
}

interface AuthHeader extends Record<string, string> {
  Authorization: string;
}

interface HttpError {
  response: {
    data: {
      message: string;
      statusCode: number;
    };
  };
}
