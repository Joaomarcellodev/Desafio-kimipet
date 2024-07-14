"use client";

import React, { useEffect, useState } from "react";

export function SectionHero4() {
  const [clinicas, setClinicas] = useState(0);
  const [petsCadastrados, setPetsCadastrados] = useState(0);
  const [tutoresCadastrados, setTutoresCadastrados] = useState(0);

  // Simulação de carregamento dos números
  useEffect(() => {
    const interval = setInterval(() => {
      // Valores finais
      const finalClinicas = 569;
      const finalPets = 232;
      const finalTutores = 150;

      // Incrementando os valores gradualmente até atingir o final
      setClinicas((prev) => (prev < finalClinicas ? prev + 1 : finalClinicas));
      setPetsCadastrados((prev) =>
        prev < finalPets ? prev + 1 : finalPets
      );
      setTutoresCadastrados((prev) =>
        prev < finalTutores ? prev + 1 : finalTutores
      );
    }, 10); // Intervalo de atualização (em milissegundos)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <section className="flex justify-center items-center mt-14 gap-8">
      {/* Div para Clínicas e Petshops */}
      <div className="text-center bg-orange-500 text-white p-8 rounded-lg shadow-lg">
        <div className="text-4xl font-bold">{clinicas}</div>
        <h2 className="text-xl font-bold mt-2">Clínicas e Petshops</h2>
      </div>

      {/* Div para Pets Cadastrados */}
      <div className="text-center bg-orange-500 text-white p-8 rounded-lg shadow-lg">
        <div className="text-4xl font-bold">{petsCadastrados}</div>
        <h2 className="text-xl font-bold mt-2">Pets Cadastrados</h2>
      </div>

      {/* Div para Tutores Cadastrados */}
      <div className="text-center bg-orange-500 text-white p-8 rounded-lg shadow-lg">
        <div className="text-4xl font-bold">{tutoresCadastrados}</div>
        <h2 className="text-xl font-bold mt-2">Tutores Cadastrados</h2>
      </div>
    </section>
  );
}
