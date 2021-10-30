import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Grapes Collection</title>
        <meta name="description" content="Wine inspired NFTs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className="flex">
            <img
              className="logo"
              src="./grapes-logo.png"
              alt="The Grapes Collection logo"
            />
            <h1>The Grapes Collection</h1>
            <button>Learn more</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
