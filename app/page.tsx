import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import ThemeToggle from "@/app/ui/ThemeToggle";

export default async function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4 bg-background">
        <p className="text-text font-extrabold text-4xl">Theme changes will happen when the button is pressed.</p>
        <ThemeToggle />
      </main>
    </>
  );
}
