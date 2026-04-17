import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black w-full min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center justify-between  bg-white dark:bg-black sm:items-start">
        <div className="w-full">
          <Image
            className="dark:invert w-full h-auto"
            src="/scoopthemids.png"
            alt="Scoop the Mids logo"
            width={1920}
            height={200}
            priority
            style={{ width: '100%', height: '100%' }}
            sizes="100vw"
          />
        </div>
      </main>
    </div>
  );
}
