import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4 max-w-md mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-2xl">Welcome to Our App</h1>
        <Button asChild size={"lg"}>
          <Link href="/login" className="mt-4 inline-block text-blue-600">
            Sign In / Sign Up
          </Link>
        </Button>
      </div>
    </div>
  );
}
