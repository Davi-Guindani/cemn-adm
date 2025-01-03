import AuthButton from "components/AuthButton";
import { createClient } from "utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div>
      <div>
        This is a protected page that you can only see as an authenticated user
      </div>
      <nav>
        <div>
          <AuthButton />
        </div>
      </nav>
    </div>
  );
}
