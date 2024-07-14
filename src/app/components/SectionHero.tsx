import Image from "next/image";
import Hero from "/public/img/dog-image-2.png";
import { BiBone, BiHomeAlt, BiFirstAid } from "react-icons/bi";

export function SectionHero() {
  return (
    <section className="relative w-full">
      <Image
        src={Hero}
        alt="logo-hero"
        className="relative z-10 w-full h-auto"
      />
      <div className="absolute inset-0 bg-[#fc8434] opacity-75 z-20"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white gap-5 p-4">
        <h1 className="text-2xl mb-4">Bem vindo a Kimipet</h1>
        <h2 className="text-3xl md:text-5xl mb-4 font-bold text-center">
          Amar.Cuidar.Proteger
        </h2>
        <h3
          className="text-lg md:text-2xl text-center"
          style={{ maxWidth: "800px" }}
        >
          Estamos produzindo uma solução prática e eficaz para cuidar do seu
          bichinho com tudo que ele merece
        </h3>
      </div>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 z-30 bg-white2 p-3 rounded-lg flex flex-col items-center gap-3 mb-4"
        style={{
          bottom: "-6rem",
          boxShadow: "1px 1px 8px rgb(92, 90, 90)",
          width: "90%",
          maxWidth: "60%",
        }}
      >
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-white2 rounded-lg p-2 w-full">
            <button
              className="px-4 py-1 bg-white2 text-purple rounded-full flex items-center gap-2 hover:bg-purple-200 hover:bg-opacity-80 active:bg-opacity-75 border border-purple"
            >
              <BiHomeAlt />
              Clínicas
            </button>
            <button
              className="px-4 py-2 bg-white2 text-purple rounded-full flex items-center gap-2 hover:bg-purple-200 hover:bg-opacity-80 active:bg-opacity-75 border border-purple"
            >
              <BiBone />
              Petshops
            </button>
            <button
              className="px-4 py-2 bg-white2 text-purple rounded-full flex items-center gap-2 hover:bg-purple-200 hover:bg-opacity-80 active:bg-opacity-75 border border-purple"
            >
              <BiHomeAlt />
              Hospedagem
            </button>
            <button
              className="px-4 py-2 bg-red hover:bg-love text-white rounded-full flex items-center gap-2"
            >
              <BiFirstAid />
              Emergência
            </button>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 mt-1 w-full justify-center">
            <input
              type="text"
              placeholder="Buscar estabelecimento"
              className="px-4 py-2 w-full md:flex-1 border rounded-full"
            />
            <button className="px-6 py-2 bg-purple text-white rounded-full flex items-center gap-2 hover:bg-purple-dark active:bg-purple-darker">
              <i className="bi bi-search"></i>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
