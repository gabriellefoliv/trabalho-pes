import Image from "next/image";

export function Header() {
  return (
    <div
      className="relative flex w-full flex-col items-center overflow-hidden px-4 py-8 md:h-[229px] md:flex-row md:justify-start md:px-10 md:py-0"
      style={{
        backgroundImage: "linear-gradient(to right, #fbe0c8, #e97a49)",
      }}
    >
      <div className="shrink-0">
        <Image
          src="/deliveryguy.png"
          alt="Motoboy"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center text-center md:mt-0 md:items-start md:pl-10 md:text-left">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          CHEGA DE MIOJO
        </h1>
        <p className="mt-2 max-w-xs text-base font-light text-white md:max-w-none md:text-xl">
          A melhor forma de pedir comida em Nova Friburgo!
        </p>
      </div>
    </div>
  );
}