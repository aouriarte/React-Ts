export interface User {
  name: string;
  lastName: string;
  nick?: string;
  avatar: string;
}

export type UsersResponse = Array<{
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}>;
