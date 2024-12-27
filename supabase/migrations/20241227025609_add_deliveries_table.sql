create table "public"."deliveries" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "resident_id" uuid not null default gen_random_uuid(),
    "company" text not null,
    "user_id" uuid not null default gen_random_uuid(),
    "received_at" timestamp with time zone not null default now()
);


alter table "public"."deliveries" enable row level security;

CREATE UNIQUE INDEX deliveries_pkey ON public.deliveries USING btree (id);

alter table "public"."deliveries" add constraint "deliveries_pkey" PRIMARY KEY using index "deliveries_pkey";

alter table "public"."deliveries" add constraint "deliveries_resident_id_fkey" FOREIGN KEY (resident_id) REFERENCES residents(id) ON UPDATE CASCADE not valid;

alter table "public"."deliveries" validate constraint "deliveries_resident_id_fkey";

alter table "public"."deliveries" add constraint "deliveries_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE not valid;

alter table "public"."deliveries" validate constraint "deliveries_user_id_fkey";

grant delete on table "public"."deliveries" to "anon";

grant insert on table "public"."deliveries" to "anon";

grant references on table "public"."deliveries" to "anon";

grant select on table "public"."deliveries" to "anon";

grant trigger on table "public"."deliveries" to "anon";

grant truncate on table "public"."deliveries" to "anon";

grant update on table "public"."deliveries" to "anon";

grant delete on table "public"."deliveries" to "authenticated";

grant insert on table "public"."deliveries" to "authenticated";

grant references on table "public"."deliveries" to "authenticated";

grant select on table "public"."deliveries" to "authenticated";

grant trigger on table "public"."deliveries" to "authenticated";

grant truncate on table "public"."deliveries" to "authenticated";

grant update on table "public"."deliveries" to "authenticated";

grant delete on table "public"."deliveries" to "service_role";

grant insert on table "public"."deliveries" to "service_role";

grant references on table "public"."deliveries" to "service_role";

grant select on table "public"."deliveries" to "service_role";

grant trigger on table "public"."deliveries" to "service_role";

grant truncate on table "public"."deliveries" to "service_role";

grant update on table "public"."deliveries" to "service_role";

create policy "Enable read access for all users"
on "public"."residents"
as permissive
for select
to public
using (true);



