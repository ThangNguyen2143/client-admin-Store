"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

function SignInButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <p>{session.user.name}</p>
        <Link href={"/api/auth/signout"}>Sign Out</Link>
        <button onClick={() => signOut()}>Sign out 2</button>
      </div>
    );
  }
  return (
    <div>
      <Link href={"/api/auth/signin"}>Sign In</Link>
      <button onClick={() => signOut()}>Sign In 2</button>
      <Link href={"/signup"}>Sign Up</Link>
    </div>
  );
}

export default SignInButton;
