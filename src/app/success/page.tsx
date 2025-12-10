"use client";
import Button from "@/components/buttons/Button";
import Phrase from "@/components/typography/Phrase";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [sessionId, setSessionId] = useState<string | null>(null);

  const nextjsRepositoryLink =
    process.env.NEXT_PUBLIC_STABLE_REACT_NEXT_LIB_DOWNLOAD_URL;
  const viteRepositoryLink =
    process.env.NEXT_PUBLIC_STABLE_REACT_VITE_LIB_DOWNLOAD_URL;
  const isRecovery = searchParams?.get("recovery");

  useEffect(() => {
    const idFromParams = searchParams?.get("checkoutSessionId") ?? null;

    if (idFromParams) {
      setSessionId(idFromParams);
      return;
    }

    if (typeof window !== "undefined") {
      const fallbackParams = new URLSearchParams(window.location.search);
      const fallbackId = fallbackParams.get("checkoutSessionId");
      setSessionId(fallbackId);
    }
  }, [searchParams]);

  const hasValidSession = useMemo(() => {
    if (!sessionId) return false;
    const normalized = sessionId.trim();
    return normalized.startsWith("cs_") || normalized.length > 10;
  }, [sessionId]);

  const handleDownloadNextJSPack = () => {
    if (typeof window !== "undefined") {
      window.open(nextjsRepositoryLink, "_blank");
    }
  };

  const handleDownloadVitePack = () => {
    if (typeof window !== "undefined") {
      window.open(viteRepositoryLink, "_blank");
    }
  };

  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden pt-12 md:pt-16">
      <Header />
      <div className="w-full max-w-7xl flex flex-1 flex-col items-center mx-auto py-24 px-8 gap-12">
        <Title
          content={
            isRecovery === "true"
              ? "Recuperação de assinatura"
              : "Compra realizada com sucesso!"
          }
        />
        <Phrase content="Clique no botão abaixo para fazer o download da biblioteca de acordo com o tipo de projeto desejado." />
        <Button
          label="Download pacote React + Vite"
          disabled={!hasValidSession}
          onClick={handleDownloadVitePack}
        />
        <Button
          label="Download pacote React + NextJS"
          disabled={!hasValidSession}
          onClick={handleDownloadNextJSPack}
        />
        {!isRecovery && (
          <Subtitle content="Obrigado por adquirir React Ultimate PRO." />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default function Success() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen flex items-center justify-center bg-background">
          <Phrase content="Carregando os detalhes da compra..." />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
