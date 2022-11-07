import { getSession } from "next-auth/react";
import { Layout } from "../src/components/Layout";

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function Home() {
  return <Layout>Home page</Layout>;
}
