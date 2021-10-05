CREATE TABLE "public"."user_exchange_keys" ("id" uuid NOT NULL, "user_id" uuid NOT NULL, "secret_key" text NOT NULL, "exchange_broker" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted_at" timestamptz, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_user_exchange_keys_updated_at"
BEFORE UPDATE ON "public"."user_exchange_keys"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_exchange_keys_updated_at" ON "public"."user_exchange_keys" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
