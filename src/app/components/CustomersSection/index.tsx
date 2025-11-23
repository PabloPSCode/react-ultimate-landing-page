"use client";
import BrandMarquee from "@/components/marketing/BrandMarquee";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";

export default function CustomersSection() {
  const customers = [
    {
      src: "/companies/logo1.webp",
      alt: "Logo da Home Colchoes",
    },
    {
      src: "/companies/logo2.webp",
      alt: "Logo da Preco Baixo",
    },
    {
      src: "/companies/logo3.webp",
      alt: "Logo da Oticas Colirio",
    },
    {
      src: "/companies/logo4.webp",
      alt: "Logo da RV Colors",
    },
    {
      src: "/companies/logo5.webp",
      alt: "Logo da Pignatti",
    },
    {
      src: "/companies/logo6.webp",
      alt: "Logo da Rede Sao Pedro",
    },
    {
      src: "/companies/logo7.webp",
      alt: "Logo da Gandini ",
    },
    {
      src: "/companies/logo8.webp",
      alt: "Logo da Maria do Carmo",
    },
    {
      src: "/companies/logo9.webp",
      alt: "Logo da Rede Drogao Popular",
    },
  ];

  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="servicos"
    >
      <Title content="Clientes" />
      <Subtitle
        content="Mais de 400 clientes ativos sendo impulsionados por nosso Grupo."
        weight="light"
      />
      <div className="flex w-full mt-4">
        <BrandMarquee logos={customers} />
      </div>
    </section>
  );
}
