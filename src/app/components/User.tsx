"use client";
import Image from "next/image";
import ImgModal from "/public/img/logo-kimipet.png";
import React, { useState, useRef, useEffect } from 'react';

export function User() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSvgClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="relative">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
          onClick={handleSvgClick}
          style={{ cursor: 'pointer' }}
        >
          <path
            fill="#fc8434"
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          />
        </svg>
      </div>

      {isModalOpen && (
        <div 
          ref={modalRef} 
          className="fixed inset-0 flex items-center justify-end z-50"
          onClick={(event) => {
            if (event.target === modalRef.current) {
              setIsModalOpen(false);
            }
          }}
        >
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs" style={{ marginRight: "20px", marginTop: "-10rem", boxShadow: "1px 1px 8px rgb(92, 90, 90)" }}>
            <div className="flex items-center justify-center mt-4">
              <Image
                src={ImgModal}
                alt="Logo Kimipet"
                className="mx-auto mb-2"
                width={80}
                height={80}
              />
            </div>
            <h2 className="text-lg mb-2 text-center">Já tem uma conta?</h2>
            <button 
              className="w-full bg-orange text-white py-2 rounded-full mb-4 hover:bg-orange-dark active:bg-black focus:outline-none focus:ring focus:ring-orange-dark"
              onClick={() => setIsModalOpen(false)} 
            >
              Entrar
            </button>
            <h2 className="text-lg mb-2 text-center">Ainda não é cadastrado?</h2>
            <button 
              className="w-full bg-purple text-white py-2 rounded-full mb-2 hover:bg-purple-dark active:bg-black focus:outline-none focus:ring focus:ring-purple-dark"
              onClick={() => setIsModalOpen(false)} 
            >
              Cadastrar
            </button>
            <h2 className="text-lg mb-2 text-center">
              Empresa parceira? <a href="#" className="text-blue-500 hover:underline">Clique aqui.</a>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
