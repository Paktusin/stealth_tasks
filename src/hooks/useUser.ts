import { User } from "next-auth";
import { useSession } from "next-auth/react";

export function useUser() {
  const session = useSession();
  if (session.status === "unauthenticated") {
    window.location.href = "/login";
  }
  return session.data?.user as User;
}
