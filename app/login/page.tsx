import Link from "next/link";
import { SubmitButton } from "./submit-button";
import { signIn } from "./actions";

export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>;
}) {
  return (
    <div>
      <Link href="/">Back</Link>

      <form>
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="you@example.com" required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton formAction={signIn} pendingText="Signing In...">
          Sign In
        </SubmitButton>
        {(await searchParams)?.message && (
          <p>{(await searchParams)?.message}</p>
        )}
      </form>
    </div>
  );
}
