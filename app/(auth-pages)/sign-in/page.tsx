import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="w-full flex flex-col">
      <h1 className="text-2xl font-medium text-center w-full">Log in</h1>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-4">
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          placeholder="you@example.com"
          required
          className="bg-primary border-none"
        />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-xs text-text underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
          className="bg-primary border-none"
        />
        <SubmitButton pendingText="Signing In..." formAction={signInAction}>
          Sign in
        </SubmitButton>
        <FormMessage message={searchParams} />
        <p className="text-sm text-text">
          Don't have an account?{" "}
          <Link className="text-text font-medium underline" href="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}
