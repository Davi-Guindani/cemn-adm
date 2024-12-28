drop policy "Enable read access for authenticated users only" on "public"."deliveries";

create table "public"."houses" (
    "id" uuid not null default gen_random_uuid(),
    "number" smallint not null,
    "street_id" uuid not null default gen_random_uuid()
);


alter table "public"."houses" enable row level security;

create table "public"."houses_residents" (
    "id" uuid not null default gen_random_uuid(),
    "resident_id" uuid not null default gen_random_uuid(),
    "house_id" uuid not null default gen_random_uuid()
);


alter table "public"."houses_residents" enable row level security;

create table "public"."streets" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null
);


alter table "public"."streets" enable row level security;

alter table "public"."deliveries" add column "house_id" uuid not null;

alter table "public"."deliveries" add column "street_id" uuid not null;

alter table "public"."deliveries" alter column "resident_id" drop default;

alter table "public"."deliveries" alter column "user_id" drop default;

alter table "public"."residents" drop column "house_number";

alter table "public"."residents" drop column "street";

alter table "public"."users" alter column "first_name" set not null;

alter table "public"."users" alter column "last_name" set not null;

CREATE UNIQUE INDEX houses_pkey ON public.houses USING btree (id);

CREATE UNIQUE INDEX houses_residents_pkey ON public.houses_residents USING btree (id);

CREATE UNIQUE INDEX streets_pkey ON public.streets USING btree (id);

alter table "public"."houses" add constraint "houses_pkey" PRIMARY KEY using index "houses_pkey";

alter table "public"."houses_residents" add constraint "houses_residents_pkey" PRIMARY KEY using index "houses_residents_pkey";

alter table "public"."streets" add constraint "streets_pkey" PRIMARY KEY using index "streets_pkey";

alter table "public"."deliveries" add constraint "deliveries_house_id_fkey" FOREIGN KEY (house_id) REFERENCES houses(id) ON UPDATE CASCADE not valid;

alter table "public"."deliveries" validate constraint "deliveries_house_id_fkey";

alter table "public"."deliveries" add constraint "deliveries_street_id_fkey" FOREIGN KEY (street_id) REFERENCES streets(id) ON UPDATE CASCADE not valid;

alter table "public"."deliveries" validate constraint "deliveries_street_id_fkey";

alter table "public"."houses" add constraint "houses_street_id_fkey" FOREIGN KEY (street_id) REFERENCES streets(id) ON UPDATE CASCADE not valid;

alter table "public"."houses" validate constraint "houses_street_id_fkey";

alter table "public"."houses_residents" add constraint "houses_residents_house_id_fkey" FOREIGN KEY (house_id) REFERENCES houses(id) ON UPDATE CASCADE not valid;

alter table "public"."houses_residents" validate constraint "houses_residents_house_id_fkey";

alter table "public"."houses_residents" add constraint "houses_residents_resident_id_fkey" FOREIGN KEY (resident_id) REFERENCES residents(id) ON UPDATE CASCADE not valid;

alter table "public"."houses_residents" validate constraint "houses_residents_resident_id_fkey";

grant delete on table "public"."houses" to "anon";

grant insert on table "public"."houses" to "anon";

grant references on table "public"."houses" to "anon";

grant select on table "public"."houses" to "anon";

grant trigger on table "public"."houses" to "anon";

grant truncate on table "public"."houses" to "anon";

grant update on table "public"."houses" to "anon";

grant delete on table "public"."houses" to "authenticated";

grant insert on table "public"."houses" to "authenticated";

grant references on table "public"."houses" to "authenticated";

grant select on table "public"."houses" to "authenticated";

grant trigger on table "public"."houses" to "authenticated";

grant truncate on table "public"."houses" to "authenticated";

grant update on table "public"."houses" to "authenticated";

grant delete on table "public"."houses" to "service_role";

grant insert on table "public"."houses" to "service_role";

grant references on table "public"."houses" to "service_role";

grant select on table "public"."houses" to "service_role";

grant trigger on table "public"."houses" to "service_role";

grant truncate on table "public"."houses" to "service_role";

grant update on table "public"."houses" to "service_role";

grant delete on table "public"."houses_residents" to "anon";

grant insert on table "public"."houses_residents" to "anon";

grant references on table "public"."houses_residents" to "anon";

grant select on table "public"."houses_residents" to "anon";

grant trigger on table "public"."houses_residents" to "anon";

grant truncate on table "public"."houses_residents" to "anon";

grant update on table "public"."houses_residents" to "anon";

grant delete on table "public"."houses_residents" to "authenticated";

grant insert on table "public"."houses_residents" to "authenticated";

grant references on table "public"."houses_residents" to "authenticated";

grant select on table "public"."houses_residents" to "authenticated";

grant trigger on table "public"."houses_residents" to "authenticated";

grant truncate on table "public"."houses_residents" to "authenticated";

grant update on table "public"."houses_residents" to "authenticated";

grant delete on table "public"."houses_residents" to "service_role";

grant insert on table "public"."houses_residents" to "service_role";

grant references on table "public"."houses_residents" to "service_role";

grant select on table "public"."houses_residents" to "service_role";

grant trigger on table "public"."houses_residents" to "service_role";

grant truncate on table "public"."houses_residents" to "service_role";

grant update on table "public"."houses_residents" to "service_role";

grant delete on table "public"."streets" to "anon";

grant insert on table "public"."streets" to "anon";

grant references on table "public"."streets" to "anon";

grant select on table "public"."streets" to "anon";

grant trigger on table "public"."streets" to "anon";

grant truncate on table "public"."streets" to "anon";

grant update on table "public"."streets" to "anon";

grant delete on table "public"."streets" to "authenticated";

grant insert on table "public"."streets" to "authenticated";

grant references on table "public"."streets" to "authenticated";

grant select on table "public"."streets" to "authenticated";

grant trigger on table "public"."streets" to "authenticated";

grant truncate on table "public"."streets" to "authenticated";

grant update on table "public"."streets" to "authenticated";

grant delete on table "public"."streets" to "service_role";

grant insert on table "public"."streets" to "service_role";

grant references on table "public"."streets" to "service_role";

grant select on table "public"."streets" to "service_role";

grant trigger on table "public"."streets" to "service_role";

grant truncate on table "public"."streets" to "service_role";

grant update on table "public"."streets" to "service_role";

create policy "Enable delete access for all users"
on "public"."streets"
as permissive
for delete
to anon
using (true);


create policy "Enable insert for all users"
on "public"."streets"
as permissive
for insert
to anon
with check (true);


create policy "Enable read access for all users"
on "public"."streets"
as permissive
for select
to anon
using (true);


create policy "Enable update access for all users"
on "public"."streets"
as permissive
for update
to anon
using (true)
with check (true);


create policy "Enable read access for authenticated users only"
on "public"."deliveries"
as permissive
for select
to authenticated
using (true);



