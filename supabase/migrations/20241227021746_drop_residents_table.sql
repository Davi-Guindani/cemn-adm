revoke delete on table "public"."residents" from "anon";

revoke insert on table "public"."residents" from "anon";

revoke references on table "public"."residents" from "anon";

revoke select on table "public"."residents" from "anon";

revoke trigger on table "public"."residents" from "anon";

revoke truncate on table "public"."residents" from "anon";

revoke update on table "public"."residents" from "anon";

revoke delete on table "public"."residents" from "authenticated";

revoke insert on table "public"."residents" from "authenticated";

revoke references on table "public"."residents" from "authenticated";

revoke select on table "public"."residents" from "authenticated";

revoke trigger on table "public"."residents" from "authenticated";

revoke truncate on table "public"."residents" from "authenticated";

revoke update on table "public"."residents" from "authenticated";

revoke delete on table "public"."residents" from "service_role";

revoke insert on table "public"."residents" from "service_role";

revoke references on table "public"."residents" from "service_role";

revoke select on table "public"."residents" from "service_role";

revoke trigger on table "public"."residents" from "service_role";

revoke truncate on table "public"."residents" from "service_role";

revoke update on table "public"."residents" from "service_role";

alter table "public"."residents" drop constraint "residents_pkey";

drop index if exists "public"."residents_pkey";

drop table "public"."residents";


