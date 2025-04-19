import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center mt-10">
      <SignIn path="/signIn" routing="path" afterSignInUrl="/admin"/>
    </div>
  );
}