import Image from "next/image";
import Hero7 from "/public/img/logo-kimipet-text-purple.png";
import Hero7_1 from "/public/img/insta-remove.png.png";
import Hero7_2 from "/public/img/wpp.png";

export function Footer() {
  return (
    <footer className="bg-white p-8 mt-24 md:mt-48">
      <div className="container mx-auto flex flex-wrap justify-between">
        
        {/* Logo */}
        <div className="w-full md:w-1/5 mb-4 flex items-center justify-center md:justify-start">
          <Image src={Hero7} alt="Hero7" />
        </div>

        <div className="flex flex-wrap w-full md:w-4/5 justify-between">
          {/* Sobre */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 flex flex-col items-center md:items-start">
            <h1 className="text-purple font-bold mb-4">Sobre</h1>
            <p className="mb-2 hover:underline"><a href="#">Conheça a Kimipet</a></p>
            <p className="mb-2 hover:underline"><a href="#">Planos</a></p>
            <p className="mb-2 hover:underline"><a href="#">Cadastre sua empresa</a></p>
            <p className="mb-2 hover:underline"><a href="#">Política de privacidade</a></p>
            <p className="mb-2 hover:underline"><a href="#">Termos e uso</a></p>
            <p className="mb-2 hover:underline"><a href="#">Termos de consentimento</a></p>
          </div>

          {/* Funcionalidades */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 flex flex-col items-center md:items-start">
            <h1 className="text-purple font-bold mb-4">Funcionalidades</h1>
            <p className="mb-2 hover:underline"><a href="#">Conheça a Kimipet</a></p>
            <p className="mb-2 hover:underline"><a href="#">Planos</a></p>
            <p className="mb-2 hover:underline"><a href="#">Cadastre sua empresa</a></p>
            <p className="mb-2 hover:underline"><a href="#">Política de privacidade</a></p>
            <p className="mb-2 hover:underline"><a href="#">Termos e uso</a></p>
          </div>

          {/* Ajuda */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 flex flex-col items-center md:items-start">
            <h1 className="text-purple font-bold mb-4">Ajuda</h1>
            <p className="mb-2 hover:underline"><a href="#">Conheça a Kimipet</a></p>
            <p className="mb-2 hover:underline"><a href="#">Planos</a></p>
            <p className="mb-2 hover:underline"><a href="#">Cadastre sua empresa</a></p>
          </div>

          {/* Contato */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 flex flex-col items-center md:items-start">
            <h1 className="text-purple font-bold mb-4">Contato</h1>
            <div className="flex items-center space-x-6">
              <Image src={Hero7_1} alt="Instagram" width={48} height={48} />
              <Image src={Hero7_2} alt="WhatsApp" width={48} height={48} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
