drop policy " Enable update access for authenticated users only" on "public"."deliveries";

drop policy "Enable delete access for authenticated users only" on "public"."deliveries";

drop policy "Enable insert access for authenticated users only" on "public"."deliveries";

drop policy "Enable delete access for authenticated users only" on "public"."residents";

drop policy "Enable insert access for authenticated users only" on "public"."residents";

drop policy "Enable read access for authenticated users only" on "public"."residents";

drop policy "Enable update access for authenticated users only" on "public"."residents";

drop policy "Enable delete access for all users" on "public"."streets";

drop policy "Enable insert for all users" on "public"."streets";

drop policy "Enable read access for all users" on "public"."streets";

drop policy "Enable update access for all users" on "public"."streets";

create policy "Enable delete access for authenticated users only"
on "public"."houses"
as permissive
for delete
to authenticated
using (true);


create policy "Enable insert for authenticated users only"
on "public"."houses"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for authenticated users"
on "public"."houses"
as permissive
for select
to authenticated
using (true);


create policy "Enable update access for authenticated users only"
on "public"."houses"
as permissive
for update
to authenticated
using (true)
with check (true);


create policy "Enable delete access for authenticated users only"
on "public"."houses_residents"
as permissive
for delete
to authenticated
using (true);


create policy "Enable insert access for authenticated users only"
on "public"."houses_residents"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for authenticated users only"
on "public"."houses_residents"
as permissive
for select
to authenticated
using (true);


create policy "Enable update access for authenticated users only"
on "public"."houses_residents"
as permissive
for update
to authenticated
using (true)
with check (true);


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


create policy "Enable delete access for all users"
on "public"."streets"
as permissive
for delete
to authenticated
using (true);


create policy "Enable insert for all users"
on "public"."streets"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."streets"
as permissive
for select
to authenticated
using (true);


create policy "Enable update access for all users"
on "public"."streets"
as permissive
for update
to authenticated
using (true)
with check (true);



