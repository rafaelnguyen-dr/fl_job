export type UserExchangeKey = {
  id: number;
  user_id: string;
  key: string;
  secret_key: string;
  exchange: string;
  status: boolean;
  is_selected: boolean;
  created_at: Date;
  updated_at: Date;
};

export type TExchangeKeyCondition = {
  user_id: string;
  exchange: string;
  status: boolean;
  is_selected?: boolean;
};
