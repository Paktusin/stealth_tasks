import { useMemo } from "react";

export function useDate(value: number) {
  const date = useMemo(() => new Date(value).toLocaleString(), [value]);
  return date;
}
