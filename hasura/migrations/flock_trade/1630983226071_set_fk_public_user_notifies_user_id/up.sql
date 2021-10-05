alter table "public"."user_notifies"
  add constraint "user_notifies_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;
