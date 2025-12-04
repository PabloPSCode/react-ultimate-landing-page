"use client";
import { Accordeon } from "@/components/miscellaneous/Accordeon";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { faqQuestions } from "@/mocks";

export default function FaqSection() {
  return (
    <section className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14">
      <Title content="Perguntas Frequentes" />
      <Subtitle
        content="Veja as respostas para as perguntas mais comuns sobre a React Ultimate."
        weight="light"
        className="text-center"
      />
      <Accordeon questions={faqQuestions} />
    </section>
  );
}
