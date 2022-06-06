import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Weather checker</title>
        <meta name="description" content="A weather app builded with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p className="text-3xl font-bold underline text-amber-800">
          Hola Mundo
        </p>
      </div>
    </div>
  );
};

export default Home;
