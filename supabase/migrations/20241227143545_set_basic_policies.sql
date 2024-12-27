drop policy "Enable read access for all users" on "public"."residents";

create policy " Enable update access for authenticated users only"
on "public"."deliveries"
as permissive
for update
to authenticated
using (true)
with check (true);


create policy "Enable delete access for authenticated users only"
on "public"."deliveries"
as permissive
for delete
to authenticated
using (true);


create policy "Enable insert access for authenticated users only"
on "public"."deliveries"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for authenticated users only"
on "public"."deliveries"
as permissive
for select
to authenticated
using (true);


create policy "Enable delete access for authenticated users only"
on "public"."residents"
as permissive
for delete
to authenticated
using (true);


create policy "Enable insert access for authenticated users only"
on "public"."residents"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for authenticated users only"
on "public"."residents"
as permissive
for select
to authenticated
using (true);


create policy "Enable update access for authenticated users only"
on "public"."residents"
as permissive
for update
to authenticated
using (true)
with check (true);



