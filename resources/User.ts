export type User = {
  id: string;
  first_name: string;
  last_name: string;
  is_leader: boolean;
};

export type Credential = {
  id: string;
  username: string;
  password: string;
};

export type PayloadRegister = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
