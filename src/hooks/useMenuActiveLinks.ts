import { useRouter } from "next/router";
import { useMemo } from "react";

export function useMenuActiveLinks() {
  const { pathname } = useRouter();
  const links = useMemo(
    () =>
      [
        { path: "/list", name: "List" },
        { path: "/dashboard", name: "Dashboard" },
      ].map((r) => ({
        ...r,
        active: pathname.indexOf(r.path) !== -1,
      })),
    [pathname]
  );
  return links;
}
