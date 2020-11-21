interface NavItem {
  type: "TIME" | "GROUP";
  title: string;
  pathname: string;
}

interface AuthHeader extends Record<string, string> {
  Authorization: string;
}
