import { useState } from "react";
import Head from "next/head";
import Layout from "../compornents/layout";

export default function Recomend() {
  const [keyword, setKeyword] = useState("");
  const [viewKeyword, setViewKeyword] = useState("");

  const searchTech = () => {
    setViewKeyword(keyword);
  };
  return (
    <Layout>
      <Head>
        <title>Sample</title>
      </Head>
      <h1 className="container mx-auto mt-16 flex justify-center text-5xl">
        おすすめ技術
      </h1>
      <div className="container mx-auto m-2 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl border border-black bg-white shadow-md">
          <section className="text-3xl font-bold">
            最先端ナノファイバー技術の超活用！
          </section>
          <section className="font-normal text-gray-700">
            ナノファイバーは、直径がナノメートルの範囲にある繊維である。ナノファイバーは、さまざまなポリマーから生成することができるため、異なる物理的特性やアプリケーションの可能性を持っています。
          </section>
          <section className="font-bold text-lg text-blue-900">
            株式会社最先端研究所
          </section>
          <section className="flex justify-end">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-md"
            >
              Read more
            </button>
          </section>
        </div>
        <div className="p-3 rounded-xl border border-black bg-white shadow-md">
          <section className="text-3xl font-bold">
            最先端ナノファイバー技術の超活用！
          </section>
          <section className="font-normal text-gray-700">
            ナノファイバーは、直径がナノメートルの範囲にある繊維である。ナノファイバーは、さまざまなポリマーから生成することができるため、異なる物理的特性やアプリケーションの可能性を持っています。
          </section>
          <section className="font-bold text-lg text-blue-900">
            株式会社最先端研究所
          </section>
          <section className="flex justify-end">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-md"
            >
              Read more
            </button>
          </section>
        </div>
        <div className="p-3 rounded-xl border border-black bg-white shadow-md">
          <section className="text-3xl font-bold">
            最先端ナノファイバー技術の超活用！
          </section>
          <section className="font-normal text-gray-700">
            ナノファイバーは、直径がナノメートルの範囲にある繊維である。ナノファイバーは、さまざまなポリマーから生成することができるため、異なる物理的特性やアプリケーションの可能性を持っています。
          </section>
          <section className="font-bold text-lg text-blue-900">
            株式会社最先端研究所
          </section>
          <section className="flex justify-end">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-md"
            >
              Read more
            </button>
          </section>
        </div>
      </div>

      <h2 className="container mx-auto mt-32 flex justify-center text-5xl">
        技術キーワード検索
      </h2>
      <div className="container mx-auto m-2 flex justify-center">
        <form>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="m-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent py-2 px-4 font-semibold rounded-lg shadow-md text-black"
          />
          <input
            type="button"
            value="検索"
            onClick={() => searchTech()}
            className="m-2 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 py-2 px-4 font-semibold rounded-lg shadow-md text-white cursor-pointer"
          />
        </form>
      </div>
      <div className="container mx-auto m-2 flex justify-center">{`検索キーワード:${viewKeyword}`}</div>
      <div className="container mx-auto m-2 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-xl border border-black bg-white shadow-md">
          <section className="text-3xl font-bold">
            最先端ナノファイバー技術の超活用！
          </section>
          <section className="font-normal text-gray-700">
            ナノファイバーは、直径がナノメートルの範囲にある繊維である。ナノファイバーは、さまざまなポリマーから生成することができるため、異なる物理的特性やアプリケーションの可能性を持っています。
          </section>
          <section className="font-bold text-lg text-blue-900">
            株式会社最先端研究所
          </section>
          <section className="flex justify-end">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-md"
            >
              Read more
            </button>
          </section>
        </div>
        <div className="p-3 rounded-xl border border-black bg-white shadow-md">
          <section className="text-3xl font-bold">
            最先端ナノファイバー技術の超活用！
          </section>
          <section className="font-normal text-gray-700">
            ナノファイバーは、直径がナノメートルの範囲にある繊維である。ナノファイバーは、さまざまなポリマーから生成することができるため、異なる物理的特性やアプリケーションの可能性を持っています。
          </section>
          <section className="font-bold text-lg text-blue-900">
            株式会社最先端研究所
          </section>
          <section className="flex justify-end">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-md"
            >
              Read more
            </button>
          </section>
        </div>
        <div className="p-3 rounded-xl border border-black bg-white shadow-md">
          <section className="text-3xl font-bold">
            最先端ナノファイバー技術の超活用！
          </section>
          <section className="font-normal text-gray-700">
            ナノファイバーは、直径がナノメートルの範囲にある繊維である。ナノファイバーは、さまざまなポリマーから生成することができるため、異なる物理的特性やアプリケーションの可能性を持っています。
          </section>
          <section className="font-bold text-lg text-blue-900">
            株式会社最先端研究所
          </section>
          <section className="flex justify-end">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-md"
            >
              Read more
            </button>
          </section>
        </div>
      </div>
    </Layout>
  );
}
