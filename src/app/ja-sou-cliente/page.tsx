"use client";
import Button from "@/components/buttons/Button";
import TextInput from "@/components/inputs/TextInput";
import Phrase from "@/components/typography/Phrase";
import Title from "@/components/typography/Title";
import { useFireStore } from "@/hooks/useFirestore";
import { showToastError } from "@/utils/toasts";
import { useCallback, useState } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Client() {
  const [userEmail, setUserEmail] = useState<string>("");

  const { fetchUserCheckoutSession } = useFireStore();

  const sanitizeEmail = useCallback(() => {
    const normalized = userEmail.trim().toLowerCase();
    try {
      return decodeURIComponent(normalized);
    } catch (error) {
      console.log("Error at decoding email:", error);
      return normalized;
    }
  }, [userEmail]);

  const isValidEmail = useCallback(() => {
    const sanitizedEmail = sanitizeEmail();
    return sanitizedEmail.includes("@") && sanitizedEmail.includes(".");
  }, [sanitizeEmail]);

  const handleNavigateToDownloadPage = (checkoutSessionId: string) => {
    if (typeof window !== "undefined") {
      window.location.href = `/success?checkoutSessionId=${checkoutSessionId}&recovery=true`;
    }
  };

  const checkUserIsValid = async () => {
    const sanitizedEmail = sanitizeEmail();

    if (!sanitizedEmail) {
      window.alert("Informe um e-mail válido.");
      return;
    }

    const userCheckoutSessionId = await fetchUserCheckoutSession(sanitizedEmail);
    if (userCheckoutSessionId) {
      handleNavigateToDownloadPage(userCheckoutSessionId);
      return;
    }
    showToastError("Nenhuma assinatura válida encontrada para o email informado.", { position: "top-center" });
  };

  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden pt-12 md:pt-16">
      <Toaster />
      <Header />
      <div className="w-full max-w-7xl flex flex-1 flex-col  mx-auto py-24 px-8 gap-12">
        <Title content="Verificação de compra" className="text-center" />
        <Phrase content="Informe seu e-mail abaixo para verificar sua compra. Caso exista uma compra válida vinculada ao seu email o download estará disponível." />
        <div className="w-full flex flex-col sm:flex-row sm:items-end gap-4">
          <TextInput
            label="Informe o e-mail utilizado na compra"
            onChange={(val) => setUserEmail(val.target.value)}
            placeholder="joaosilva@gmail.com"
            containerClassName="-mb-[3.5px]"
          />
          <Button
            label="Pesquisar email"
            disabled={!isValidEmail()}
            onClick={checkUserIsValid}
            className="h-fit min-w-[160px]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
