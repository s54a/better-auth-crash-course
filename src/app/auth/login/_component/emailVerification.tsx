"use client";

import { authClient } from "@/lib/auth-client";
import { BetterAuthActionButton } from "./auth/betterAuthActionButton";
import { useEffect, useRef, useState } from "react";

export function EmailVerification({ email }: { email: string }) {
  const [timeToSendNextEmail, setTimeToSendNextEmail] = useState(30);

  const interval = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    startEmailVerificationCountdown();
  }, []);

  function startEmailVerificationCountdown(time = 30) {
    setTimeToSendNextEmail(time);

    interval.current = setInterval(() => {
      setTimeToSendNextEmail((t) => {
        const newT = t - 1;
        if (newT <= 0) {
          clearInterval(interval.current);
          return 0;
        }
        return newT;
      });
    }, 1000);
  }

  return (
    <div className="space-y-4">
      <p className="text-xm text-muted-foreground mt-2">
        We sent you a verification link. Please check your email and click the
        link to verify your account.
      </p>

      <BetterAuthActionButton
        variant={"outline"}
        className="w-full"
        successMessage="Verification Email Sent!"
        disabled={timeToSendNextEmail > 0}
        action={() => {
          startEmailVerificationCountdown();
          return authClient.sendVerificationEmail({ email, callbackURL: "/" });
        }}
      >
        {timeToSendNextEmail > 0
          ? `Resend Email (${timeToSendNextEmail})`
          : "Resend Email"}
      </BetterAuthActionButton>
    </div>
  );
}
