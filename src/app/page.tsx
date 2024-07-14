import Head from "next/head";
import Image from "next/image";
import { Header, Banner } from "./components";

export default function Home() {
  return (
    <main >
      <Header />
      <Banner />
    </main>
  );
}
