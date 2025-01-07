"use client";
import { useAuthActions } from "@convex-dev/auth/react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AuthScreen } from "@/features/auth/components/auth-screen";

export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <div>
      Loggged in!
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
