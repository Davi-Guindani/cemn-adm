alter table "public"."deliveries" drop constraint "deliveries_comapny_id_fkey";

alter table "public"."deliveries" drop column "comapny_id";

alter table "public"."deliveries" add column "company_id" uuid not null;

alter table "public"."deliveries" add constraint "deliveries_company_id_fkey" FOREIGN KEY (company_id) REFERENCES companies(id) ON UPDATE CASCADE not valid;

alter table "public"."deliveries" validate constraint "deliveries_company_id_fkey";


