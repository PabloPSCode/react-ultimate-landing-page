"use client";
import Button from "@/components/buttons/Button";
import Phrase from "@/components/typography/Phrase";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { usePathname } from "next/navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Success() {
  const pathname = usePathname();

  const handleDownloadNextJSPack = () => {
    if (typeof window !== "undefined") {
      window.open("/downloads/react-ultimate-nextjs.zip", "_blank");
    }
  };

  const handleDownloadVitePack = () => {
    if (typeof window !== "undefined") {
      window.open("/downloads/react-ultimate-vite.zip", "_blank");
    }
  };

  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden pt-12 md:pt-16">
      <Header />
      <div className="w-full max-w-7xl flex flex-1 flex-col items-center mx-auto py-24 px-8 gap-12">
        <Title content="Compra realizada com sucesso!" />
        <Phrase content="Clique no botão abaixo para fazer o download da biblioteca de acordo com o tipo de projeto desejado." />
        <Button
          label="Download pacote React + Vite"
          disabled={!pathname?.includes("session_id")}
          onClick={handleDownloadVitePack}
        />
        <Button
          label="Download pacote React + NextJS"
          disabled={!pathname?.includes("session_id")}
          onClick={handleDownloadNextJSPack}
        />
        <Subtitle content="Obrigado por adquirir React Ultimate." />
      </div>
      <Footer />
    </div>
  );
}
