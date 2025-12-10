"use client";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ScrollButton from "@/components/buttons/ScrollButton";
import InfoCard from "@/components/cards/InfoCard";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { features } from "@/mocks/index";

export default function FeaturesSection() {
  const link = (
    <a
      href="https://docs.reactultimate.pablosilvadev.com.br/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground text-xs sm:text-sm"
    >
      Ver documentação
    </a>
  );

  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-13 sm:scroll-mt-142 min-h-[40vh]"
      id="recursos"
    >
      <Title content="Recursos" />
      <div className="w-full flex flex-col items-center gap-4 mt-4">
        <div className="w-full lg:w-2/3 flex flex-col items-center gap-4">
          <RevealContainer once>
            <Subtitle
              content="React Ultimate PRO é a mais completa biblioteca de componentes React do mercado brasileiro."
              className="text-center"
            />
          </RevealContainer>
        </div>
        <div className="grid grid-cols grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {features.map((feature, i) => (
            <RevealContainer key={feature.title} delay={i * 2} once>
              <InfoCard
                key={feature.title}
                title={feature.title}
                text={feature.description}
                icon={feature.icon}
                children={link}
              />
            </RevealContainer>
          ))}
        </div>
      </div>
      <ScrollButton />
    </section>
  );
}
