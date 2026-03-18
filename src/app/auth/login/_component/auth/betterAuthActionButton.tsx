"use client";

import { ActionButton } from "@/components/ui/action-button";
import { ComponentProps } from "react";

export const BetterAuthActionButton = ({
  action,
  successMessage,
  ...prop
}: Omit<ComponentProps<typeof ActionButton>, "action"> & {
  action: () => Promise<{ error: null | { message?: string } }>;
  successMessage?: string;
}) => {
  return (
    <ActionButton
      {...prop}
      action={async () => {
        const res = await action();

        if (res.error) {
          return { error: true, message: res.error.message || "Action Failed" };
        } else {
          return {
            error: false,
            message: successMessage || "Action Failed",
          };
        }
      }}
    />
  );
};
