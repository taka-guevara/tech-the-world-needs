import Link from "next/link";

export default function TechCard() {
  return (
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
          <Link href={`/techdetail`}>詳細を見てみる</Link>{" "}
        </button>
      </section>
    </div>
  );
}
