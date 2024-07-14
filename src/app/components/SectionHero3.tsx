import React from "react";
import Image from "next/image";
import HeroImage from "/public/img/dog-image-1.png";

export function SectionHero3() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-12"> {/* Ajustando margem superior */}
      <h1 className="text-3xl font-bold text-purple mb-8">Recomendações da Kimipet</h1> {/* Ajustando margem inferior */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4"> {/* Adicionando mt-4 para margem superior nos cards */}
        {/* Card principal */}
        <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow mb-16"> {/* Ajustando margem inferior dos cards */}
          <div className="relative">
            <div className="w-full h-64 overflow-hidden relative">
              <Image
                src={HeroImage}
                alt="Hero3"
                layout="fill"
                objectFit="cover"
                className="transform scale-100 hover:scale-105 transition-transform"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="absolute top-2 left-2 bg-white bg-opacity-75 border border-black text-black px-2 py-1 rounded">
                Fechado
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-4 transform translate-y-full group-hover:translate-y-0 group-hover:h-auto transition-all duration-300 overflow-hidden">
            <h1 className="font-bold">
              Amigo fiel a veterinária
            </h1>
            <h2 className="mt-2">
              Cuidando com amor, Celebrando.....
            </h2>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <h2 className="mt-4">
                (86) 1234-5678
              </h2>
              <h2 className="mt-1">
                Av. Lindolfo Monteiro
              </h2>
            </div>
          </div>
        </div>

        {/* Cards adicionais */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow mb-16"> {/* Ajustando margem inferior dos cards */}
            <div className="relative">
              <div className="w-full h-64 overflow-hidden relative">
                <Image
                  src={HeroImage}
                  alt={`Hero${index + 2}`}
                  layout="fill"
                  objectFit="cover"
                  className="transform scale-100 hover:scale-105 transition-transform"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="absolute top-2 left-2 bg-white bg-opacity-75 border border-black text-black px-2 py-1 rounded">
                  Fechado
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-4 transform translate-y-full group-hover:translate-y-0 group-hover:h-auto transition-all duration-300 overflow-hidden">
              <h1 className="font-bold">
                Amigo fiel a veterinária
              </h1>
              <h2 className="mt-2">
                Cuidando com amor, Celebrando.....
              </h2>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="mt-4">
                  (86) 1234-5678
                </h2>
                <h2 className="mt-1">
                  Av. Lindolfo Monteiro
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
