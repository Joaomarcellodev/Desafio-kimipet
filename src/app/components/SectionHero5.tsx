import Image from "next/image";
import Hero5 from "/public/img/suipa.jpg";

export function SectionHero5() {
  return (
    <section className="flex items-center justify-center h-screen p-8">
      <div className="relative w-full max-w-7xl p-10 bg-purple-sun rounded-lg overflow-hidden shadow-lg">
        <div className="mb-4 pl-8 pr-4 relative z-10">
          <h1 className="text-3xl font-bold text-purple mb-4 gap-3">Projetos Sociais</h1> 
          <p className="text-lg mb-4 leading-relaxed max-w-2xl">
            Junte-se a nós para cuidar do bem-estar do seu pet! Conheça os projetos sociais que apoiamos e ajude-nos a fazer toda a diferença na vida dos nossos queridos animais de estimação. Sua participação é fundamental para garantir um futuro saudável e feliz para eles.
          </p>
          <button className="px-6 py-3 bg-purple text-white rounded-full shadow-md hover:bg-purple-700 transition duration-300 ease-in-out mt-4">
            Vem ajudar!
          </button>
        </div>
        <div className="absolute right-0 bottom-5 transform translate-x-1/4 -translate-y-1/2 rotate-6">
          <Image
            src={Hero5}
            alt="Hero5"
            className="rounded-lg"
            layout="responsive"
            width={1000}  
            height={600}  
            objectFit="cover"
            objectPosition="bottom right"
          />
        </div>
      </div>
    </section>
  );
}
