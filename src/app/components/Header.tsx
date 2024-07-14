"use client";
import Image from "next/image";
import Logo from '/public/img/logo-kimipet-text-orange.png';
import { ItemMenu } from "./ItemMenu";
import { User } from "./User";

export function Header() {
    return (
        <header className="flex items-center w-full h-20 bg-white">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image src={Logo} alt="Logo" width={120} height={40} />
                </div>
                <div className="flex-1 flex justify-center">
                    <ul className="hidden md:flex items-center gap-6 lg:gap-12">
                        <li>
                            <ItemMenu name="Home" />
                        </li>
                        <li>
                            <ItemMenu name="Busca" />
                        </li>
                        <li>
                            <ItemMenu name="Lojas" />
                        </li>
                        <li>
                            <ItemMenu name="Blog" />
                        </li>
                        <li>
                            <ItemMenu name="Ações sociais" />
                        </li>
                    </ul>
                </div>
                <div>
                    <User />
                </div>
            </div>
        </header>
    );
}
