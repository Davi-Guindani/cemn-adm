create table "public"."residents" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "first_name" text not null,
    "last_name" text not null,
    "street" text not null,
    "house_number" smallint not null
);


alter table "public"."residents" enable row level security;

CREATE UNIQUE INDEX residents_pkey ON public.residents USING btree (id);

alter table "public"."residents" add constraint "residents_pkey" PRIMARY KEY using index "residents_pkey";

grant delete on table "public"."residents" to "anon";

grant insert on table "public"."residents" to "anon";

grant references on table "public"."residents" to "anon";

grant select on table "public"."residents" to "anon";

grant trigger on table "public"."residents" to "anon";

grant truncate on table "public"."residents" to "anon";

grant update on table "public"."residents" to "anon";

grant delete on table "public"."residents" to "authenticated";

grant insert on table "public"."residents" to "authenticated";

grant references on table "public"."residents" to "authenticated";

grant select on table "public"."residents" to "authenticated";

grant trigger on table "public"."residents" to "authenticated";

grant truncate on table "public"."residents" to "authenticated";

grant update on table "public"."residents" to "authenticated";

grant delete on table "public"."residents" to "service_role";

grant insert on table "public"."residents" to "service_role";

grant references on table "public"."residents" to "service_role";

grant select on table "public"."residents" to "service_role";

grant trigger on table "public"."residents" to "service_role";

grant truncate on table "public"."residents" to "service_role";

grant update on table "public"."residents" to "service_role";


