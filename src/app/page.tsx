import Image from "next/image";
import Link from "next/link";
import mainImg from "@/assets/main.jpg";
export default function Home() {
  return (
    <main className="flex  flex-col   ">
      <div className="flex flex-col gap-2 py-8 md:py-14 px-[6%]">
        <p className="text-gray-500 text-sm ml-2 ">
          Introducing a new era of creativity
        </p>
        <div>
          <h1 className="text-7xl md:text-8xl font-semibold ">
            OffTec Digital
            <div className="flex gap-x-48 flex-col md:flex-row">
              <p className="">Agency </p>
              <Link
                className="bg-black w-40 text-sm font-medium text-center text-white rounded-full inline-block px-8 py-4 mt-8"
                href="/contact"
              >
                Lets Talk 👋🏻
              </Link>
            </div>
          </h1>
        </div>
      </div>
      <div>
        <Image
          src={mainImg}
          alt="Picture of the author"
          className="w-full aspect-[16/15] md:aspect-[16/6] object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 py-8 md:py-14 px-[6%]">
        <p className="text-gray-500 text-sm  ">Best Service</p>
        <h2 className="text-4xl font-semibold md:w-1/2">
          Classify our foucs to break all kinds of {""}
          <span className="text-red-500">Limitation</span>
        </h2>
      </div>
    </main>
  );
}
