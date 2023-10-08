import Image from "next/image";
import Link from "next/link";

import { LoginForm } from "./login-form";

export default function Login() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 pt-16 sm:w-[350px]">
      <Image
        src="/next.svg"
        alt="Logo"
        className="mx-auto dark:invert"
        width={100}
        height={24}
        priority
      />
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Log in to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below to continue.
        </p>
      </div>
      <LoginForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
