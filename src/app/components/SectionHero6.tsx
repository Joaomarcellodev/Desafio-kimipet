import Image from "next/image";
import Hero6_1 from "/public/img/logo-android.png";
import Hero6 from "/public/img/app-store.png";
import Hero6_2 from "/public/img/img-fone-descktop.png";

export function SectionHero6() {
  return (
    <section className="bg-orange p-6 mt-10 relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start relative z-10">
        <div className="mb-6 pl-20 pr-4 lg:pr-0 lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2 text-purple-dark ml-4 mt-4">
            Conheça nosso app!
          </h1>
          <h2 className="text-xl mb-4 font-bold ml-4">
            Todas as nossas facilidades na palma da sua mão.
          </h2>
          <div className="flex items-start space-x-4 ml-4">
            <div className="flex-shrink-0 w-32 h-32 relative">
              <Image src={Hero6} alt="App Store" layout="fill" objectFit="contain" />
            </div>
            <div className="flex-shrink-0 w-32 h-32 relative">
              <Image src={Hero6_1} alt="Android Logo" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
        {/* Imagem Hero6_2 posicionada à direita da section */}
        <div className="absolute top-0 right-0 z-30 w-full lg:w-1/2 h-full">
          <div className="relative w-full h-full">
            <Image src={Hero6_2} alt="Phone Image" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
