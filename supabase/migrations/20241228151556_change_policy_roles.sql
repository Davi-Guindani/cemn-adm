drop policy "Enable delete access for authenticated users only" on "public"."residents";

drop policy "Enable insert access for authenticated users only" on "public"."residents";

drop policy "Enable read access for authenticated users only" on "public"."residents";

drop policy "Enable update access for authenticated users only" on "public"."residents";

create policy "Enable delete access for authenticated users only"
on "public"."residents"
as permissive
for delete
to anon
using (true);


create policy "Enable insert access for authenticated users only"
on "public"."residents"
as permissive
for insert
to anon
with check (true);


create policy "Enable read access for authenticated users only"
on "public"."residents"
as permissive
for select
to anon
using (true);


create policy "Enable update access for authenticated users only"
on "public"."residents"
as permissive
for update
to anon
using (true)
with check (true);



