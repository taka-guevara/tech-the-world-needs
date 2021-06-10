import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../compornents/layout";

export default function TechDetail() {
  return (
    <Layout>
      <Head>
        <title>Sample</title>
      </Head>
      <section className="w-full px-3 antialiased bg-green-400 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="container py-32 mx-auto text-center sm:px-4">
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
              <span className="block">最先端ナノファイバー技術の超活用！</span>{" "}
              <span className="relative inline-block mt-3 text-transparent text-white">
                株式会社最先端研究所
              </span>
            </h1>
            <div className="max-w-lg mx-auto mt-6 text-sm text-center text-white md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
              ナノファイバーは、直径がナノメートルの範囲にある繊維である。
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
        <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex justify-between">
              <h1 className="relative flex flex-col text-6xl font-extrabold text-left text-black">
                超極細繊維
                <span>多様な特性</span>
                <span>ポリマー生成</span>
              </h1>
            </div>
            <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
              <img
                src="https://cdn.devdojo.com/images/december2020/designs3d.png"
                className="object-cover mt-3 mr-5 h-80 lg:h-96"
              />
            </div>
          </div>

          <div className="my-16 border-b border-gray-300 lg:my-24"></div>

          <h2 className="text-left text-gray-500 xl:text-xl">
            ナノファイバーは、直径がナノメートルの範囲にある繊維である。ナノファイバーは、さまざまなポリマーから生成することができるため、異なる物理的特性やアプリケーションの可能性を持っています。
          </h2>
        </div>
      </section>

      <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src="https://cdn.devdojo.com/images/december2020/productivity.png"
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            />
          </div>

          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              ポリマーナノファイバー
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              ナノファイバーの直径は，使用するポリマーの種類や製造方法によって異なる。
              すべてのポリマーナノファイバーは，マイクロファイバーと比較して，大きな表面積／体積比，高い空隙率，優れた機械的強度，柔軟な機能化が可能であることが特徴
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                大きな表面積／体積比
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                高い空隙率
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                優れた機械的強度
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                柔軟な機能化
              </li>
            </ul>
          </div>
        </div>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              さまざまな製造方法
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              エレクトロスピニング法は、セットアップが簡単で、さまざまなポリマーから連続したナノファイバーを大量生産でき、直径、組成、配向を制御できる極薄のファイバーを生成できることから、ナノファイバーの生成に最もよく用いられる方法である
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                エレクトロスピニング法
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                自己組織化法
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                テンプレート合成法
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                熱誘起相分離法
              </li>
            </ul>
          </div>

          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src="https://cdn.devdojo.com/images/december2020/settings.png"
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-5 text-white bg-white sm:py-16 md:py-24 lg:py-16">
        <div className="p-1 text-center space-x-4 space-y-1">
          <button className="py-5 px-6 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
            <Link href={`/recomend`}>商談or話を聞いてみる</Link>
          </button>
          <button className="py-5 px-6 font-semibold rounded-lg shadow-md text-green-600 bg-green-50 hover:bg-green-700">
            <Link href={`/recomend`}>検討する</Link>
          </button>
        </div>
      </section>
    </Layout>
  );
}
