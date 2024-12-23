import Link from "next/link";
import { SubmitButton } from "./submit-button";
import { signIn, signUp } from "./actions";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
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
        <SubmitButton formAction={signUp} pendingText="Signing Up...">
          Sign Up
        </SubmitButton>
        {searchParams?.message && <p>{searchParams.message}</p>}
      </form>
    </div>
  );
}
