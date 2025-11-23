"use client";

import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import InfoCard from "@/components/cards/InfoCard";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { componentCategories } from "@/mocks/index";

export default function ComponentsSection() {
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
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="componentes"
    >
      <Title content="Componentes" />
      <div className="w-full lg:w-3/4 flex flex-col items-center gap-4">
        <RevealContainer once>
          <Subtitle
            content="Tenha consigo dezenas de componentes prontos para construir qualquer interface ou aplicação."
            className="text-center"
          />
        </RevealContainer>
      </div>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {componentCategories.map((component, index) => (
          <RevealContainer key={component.id} delay={index * 2} once>
            <InfoCard
              key={component.title}
              title={component.title}
              text={component.description}
              icon={component.icon}
              children={link}
            />
          </RevealContainer>
        ))}
      </div>
    </section>
  );
}
