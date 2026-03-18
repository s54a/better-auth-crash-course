import {
  DiscordIcon,
  GitHubIcon,
  GoogleIcon,
} from "@/app/auth/login/_component/auth/o-auth-icons";
import { ComponentProps, ElementType } from "react";

export const SUPPORTED_OAUTH_PROVIDERS = [
  "google",
  "github",
  "discord",
] as const;

export type SupportedOAuthProviders =
  (typeof SUPPORTED_OAUTH_PROVIDERS)[number];

export const SUPPORTED_OAUTH_PROVIDERS_DETAILS: Record<
  SupportedOAuthProviders,
  { name: string; Icon: ElementType<ComponentProps<"svg">> }
> = {
  google: { name: "Google", Icon: GoogleIcon },
  github: { name: "Github", Icon: GitHubIcon },
  discord: { name: "Discord", Icon: DiscordIcon },
};
