CREATE TABLE IF NOT EXISTS public.users (
  id integer primary key generated always as identity,
  name text,
  last_name text
);