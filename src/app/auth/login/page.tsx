"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInTab } from "./_component/signInTab";
import { SignUpTab } from "./_component/signUpTab";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Tabs defaultValue="signin" className="w-full max-w-lg px-4">
        <TabsList className="mx-auto">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="signin">
          <Card>
            <CardHeader className="text-2xl font-bold">
              <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <SignInTab />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="signup">
          <Card>
            <CardHeader className="text-2xl font-bold">
              <CardTitle>Sign Up</CardTitle>
            </CardHeader>

            <CardContent>
              <SignUpTab />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
