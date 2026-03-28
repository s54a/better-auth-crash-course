"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInTab } from "./_component/signInTab";
import { SignUpTab } from "./_component/signUpTab";
import { SocialAuthButtons } from "./_component/socialAuthButtons";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { EmailVerification } from "./_component/emailVerification";

type Tab = "signin" | "signup" | "email-verification";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [selectedTab, setSelectedTab] = useState<Tab>("signin");

  useEffect(() => {
    authClient.getSession().then((session) => {
      if (session.data != null) router.push("/");
    });
  }, [router]);

  function openEmailVerificationTab(email: string) {
    setEmail(email);
    setSelectedTab("email-verification");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Tabs
        value={selectedTab}
        onValueChange={(t) => setSelectedTab(t as Tab)}
        className="w-full max-w-lg px-4"
      >
        {(selectedTab === "signin" || selectedTab === "signup") && (
          <TabsList>
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
        )}

        <TabsContent value="signin">
          <Card>
            <CardHeader className="text-2xl font-bold">
              <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <SignInTab openEmailVerificationTab={openEmailVerificationTab} />
            </CardContent>

            <Separator />

            <CardFooter className="grid grid-cols-3 gap-3">
              <SocialAuthButtons />
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="signup">
          <Card>
            <CardHeader className="text-2xl font-bold">
              <CardTitle>Sign Up</CardTitle>
            </CardHeader>

            <CardContent>
              <SignUpTab openEmailVerificationTab={openEmailVerificationTab} />
            </CardContent>

            <Separator />

            <CardFooter className="grid grid-cols-3 gap-3">
              <SocialAuthButtons />
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="email-verification">
          <Card>
            <CardHeader className="text-2xl font-bold">
              <CardTitle>Verify Your Email</CardTitle>
            </CardHeader>

            <CardContent>
              <EmailVerification email={email} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
