-- Create a table for public profiles
create table users (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  first_name text,
  last_name text
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table users
  enable row level security;

create policy "Public users are viewable by everyone." on users
  for select using (true);

create policy "Users can insert their own user." on users
  for insert with check ((select auth.uid()) = id);

create policy "Users can update own user." on users
  for update using ((select auth.uid()) = id);

-- This trigger automatically creates a user entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger
set search_path = ''
as $$
begin
  insert into public.users (id, first_name, last_name)
  values (new.id, new.raw_user_meta_data->>'first_name', new.raw_user_meta_data->>'last_name');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
