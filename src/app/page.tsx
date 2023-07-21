import Image from "next/image";
import Link from "next/link";
import mainImg from "@/assets/main.jpg";
import Services from "@/components/home/Services";
import Grid from "@/components/home/Grid";

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
            <div className="flex gap-x-48 flex-col md:flex-row items-start justify-between md:items-center">
              <p className="">Agency </p>
              <Link
                className="bg-black justify-center text-sm font-medium text-center text-white rounded-full py-3  px-8 mt-8"
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
      <Services />
      <Grid />
    </main>
  );
}
