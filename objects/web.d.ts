interface NavItem {
  title: string;
  pathname: string;
}

interface AuthHeader extends Record<string, string> {
  Authorization: string;
}
