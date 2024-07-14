import Image from "next/image";
import Hero2 from "/public/img/image-esperiencia.jpeg";

export function SectionHero2() {
  return (
    <section
      className="flex"
      style={{
        width: "90%",
        margin: "5rem auto",
        marginTop: "10rem",
        gap: "10rem",
      }}
    >
      <div className="flex flex-col justify-center">
        <h1
          className="text-orange flex text-start font-bold"
          style={{ marginBottom: "3rem", fontSize: "2rem", maxWidth: "45rem" }}
        >
          Conectando pets, donos e cuidadores de forma inovadora
        </h1>

        <div className="flex flex-col gap-6">
          <p
            className="flex"
            style={{ marginBottom: "0.5rem", maxWidth: "50rem" }}
          >
            Acreditamos que cada pet merece cuidados da mais alta qualidade, e
            cada proprietário de pet merece acesso transparente e fácil às
            informações essenciais sobre seus companheiros peludos.
          </p>
          <p className="text-start" style={{ maxWidth: "50rem" }}>
            Somos uma plataforma revolucionária que busca empoderar os donos dos
            pets, oferecendo um local seguro e conveniente para armazenar e
            acessar dados importantes de seus animais de estimação.
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-purple-sun rounded-lg p-4 max-h-screen">
        <h1 className="text-purple font-bold text-center rounded-lg mb-4">
          Experiências de deixar o rabo abanando!
        </h1>

        <div
          className="flex flex-col gap-4 overflow-y-scroll"
          style={{ maxHeight: "300px" }}
        >
          <div className="flex bg-white2 rounded-lg gap-2 p-2 flex-col">
            <div className="flex gap-5">
              <Image
                className="rounded-full border-2 border-purple object-cover"
                src={Hero2}
                alt="Hero2"
                width={50}
                height={50}
              />
              <h1
                className="flex text-purple font-bold"
                style={{ maxWidth: "calc(100% - 40px)", fontSize: "18px" }}
              >
                A melhor ração para o seu pet
              </h1>
            </div>
            <div className="flex gap-20" style={{ fontSize: "15px" }}>
              <h2>Pedro Rezende</h2>
              <h3>Pet food</h3>
            </div>
          </div>

          <div className="flex bg-white2 rounded-lg gap-2 p-2 flex-col">
            <div className="flex gap-5">
              <Image
                className="rounded-full border-2 border-purple object-cover"
                src={Hero2}
                alt="Hero2"
                width={50}
                height={50}
              />
              <h1
                className="flex text-purple font-bold"
                style={{ maxWidth: "calc(100% - 40px)", fontSize: "18px" }}
              >
                A melhor ração para o seu pet
              </h1>
            </div>
            <div className="flex gap-20" style={{ fontSize: "15px" }}>
              <h2>Pedro Rezende</h2>
              <h3>Pet food</h3>
            </div>
          </div>

          <div className="flex bg-white2 rounded-lg gap-2 p-2 flex-col">
            <div className="flex gap-5">
              <Image
                className="rounded-full border-2 border-purple object-cover"
                src={Hero2}
                alt="Hero2"
                width={50}
                height={50}
              />
              <h1
                className="flex text-purple font-bold"
                style={{ maxWidth: "calc(100% - 40px)", fontSize: "18px" }}
              >
                A melhor ração para o seu pet
              </h1>
            </div>
            <div className="flex gap-20" style={{ fontSize: "15px" }}>
              <h2>Pedro Rezende</h2>
              <h3>Pet food</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
