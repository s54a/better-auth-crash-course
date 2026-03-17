"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { data: session, isPending: loading } = authClient.useSession();

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-2">
        <Loader2 className="text-muted-foreground h-6 w-6 animate-spin" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md items-center justify-center px-4">
      <div className="space-y-4 text-center">
        {session == null ? (
          <>
            <h1 className="text-3xl font-bold">Welcome to Our App</h1>
            <Button asChild size={"lg"}>
              <Link
                href="/auth/login"
                className="mt-4 inline-block text-blue-600"
              >
                Sign In / Sign Up
              </Link>
            </Button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Welcome {session.user.name}!</h1>
            <Button
              size={"lg"}
              variant={"destructive"}
              onClick={() => authClient.signOut()}
            >
              Sign Out
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
