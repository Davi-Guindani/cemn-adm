drop policy "Public users are viewable by everyone." on "public"."users";

drop policy "Users can insert their own user." on "public"."users";

drop policy "Users can update own user." on "public"."users";

create table "public"."companies" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null
);


alter table "public"."companies" enable row level security;

alter table "public"."deliveries" drop column "company";

alter table "public"."deliveries" add column "comapny_id" uuid not null;

CREATE UNIQUE INDEX companies_pkey ON public.companies USING btree (id);

alter table "public"."companies" add constraint "companies_pkey" PRIMARY KEY using index "companies_pkey";

alter table "public"."deliveries" add constraint "deliveries_comapny_id_fkey" FOREIGN KEY (comapny_id) REFERENCES companies(id) ON UPDATE CASCADE not valid;

alter table "public"."deliveries" validate constraint "deliveries_comapny_id_fkey";

grant delete on table "public"."companies" to "anon";

grant insert on table "public"."companies" to "anon";

grant references on table "public"."companies" to "anon";

grant select on table "public"."companies" to "anon";

grant trigger on table "public"."companies" to "anon";

grant truncate on table "public"."companies" to "anon";

grant update on table "public"."companies" to "anon";

grant delete on table "public"."companies" to "authenticated";

grant insert on table "public"."companies" to "authenticated";

grant references on table "public"."companies" to "authenticated";

grant select on table "public"."companies" to "authenticated";

grant trigger on table "public"."companies" to "authenticated";

grant truncate on table "public"."companies" to "authenticated";

grant update on table "public"."companies" to "authenticated";

grant delete on table "public"."companies" to "service_role";

grant insert on table "public"."companies" to "service_role";

grant references on table "public"."companies" to "service_role";

grant select on table "public"."companies" to "service_role";

grant trigger on table "public"."companies" to "service_role";

grant truncate on table "public"."companies" to "service_role";

grant update on table "public"."companies" to "service_role";

create policy "Enable delete access for all users"
on "public"."companies"
as permissive
for delete
to authenticated
using (true);


create policy "Enable insert for authenticated users only"
on "public"."companies"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for authenticated users"
on "public"."companies"
as permissive
for select
to authenticated
using (true);


create policy "Enable update for authenticated users only"
on "public"."companies"
as permissive
for update
to authenticated
using (true)
with check (true);


create policy "Enable delete access for authenticated users"
on "public"."users"
as permissive
for delete
to authenticated
using (true);


create policy "Enable insert for authenticated users only"
on "public"."users"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for authenticated users"
on "public"."users"
as permissive
for select
to authenticated
using (true);


create policy "Enable update access for authenticated users"
on "public"."users"
as permissive
for update
to authenticated
using (true)
with check (true);



