export type UserBalanceHistory = {
  id: string;
  date: Date;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  total_value: number;
  exchange_name: string;
  currency_unit: string;
};

export type TUserBalanceHistory = {
  date: Date;
  user_id: string;
  total_value: number;
  exchange_name: string;
  currency_unit: string;
};
