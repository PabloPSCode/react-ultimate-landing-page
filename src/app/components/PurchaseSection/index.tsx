"use client";
import SplittedText from "@/components/animations-and-loading/SplittedText";
import PlanCard from "@/components/cards/PlanCard";
import Subtitle from "@/components/typography/Subtitle";

export default function PurchaseSection() {
  return (
    <section className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14">
      <SplittedText
        className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground"
        delay={80}
        duration={0.2}
        ease="power3.out"
        onLetterAnimationComplete={() => {}}
        rootMargin="-80px"
        splitType="words"
        tag="h2"
        text="Pronto para escalar seu desenvolvimento?"
        textAlign="center"
        threshold={0.15}
      />
      <Subtitle
        content="Adquira React Ultimate e transforme seu desenvolvimento pagando em real, não em dólar."
        className="my-4 text-center"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
        <PlanCard
          advantages={[
            "+120 componentes React prontos para uso;",
            "responsividade automática para qualquer dispositivo;",
            "personalização completa via props e temas;",
            "suporte ao dark mode configurado;",
            "construído com TypeScript para máxima segurança;",
            "documentação detalhada com exemplos práticos;",
          ]}
          price="R$ 99,90"
          title="Para desenvolvedores"
          className="max-w-lg"
          priceNote="Pagamento único"
          buttonLabel="Adquirir React Ultimate"
        />
        <PlanCard
          advantages={[
            "+120 componentes React prontos para uso;",
            "responsividade automática para qualquer dispositivo;",
            "personalização completa via props e temas;",
            "suporte ao dark mode configurado;",
            "construído com TypeScript para máxima segurança;",
            "documentação detalhada com exemplos práticos;",
            "suporte exclusivo via Whatsapp e email;",
          ]}
          price="R$ 299,90"
          title="Para equipes (até 5 devs)"
          className="max-w-lg"
          priceNote="Pagamento único"
          buttonLabel="Adquirir React Ultimate"
          isBestOption
        />
      </div>
    </section>
  );
}
