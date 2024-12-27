import AuthButton from "components/AuthButton";

export default async function DashBoardPage() {
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
