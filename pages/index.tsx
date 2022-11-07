import { getSession } from "next-auth/react";
import { Layout } from "../src/components/Layout";

export default function Home() {
  return <Layout>Home page</Layout>;
}
