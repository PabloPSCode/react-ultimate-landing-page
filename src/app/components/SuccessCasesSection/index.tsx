"use client";
import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import Image from "next/image";

export default function TestimonialsSection() {
  const items = [
    {
      id: 1,
      title: "PS Code",
      imagePath: "/projects/project1.png",
      url: "https://www.pscode.com.br",
      imageSize: 400,
    },
    {
      id: 2,
      title: "Dev Schools",
      imagePath: "/projects/project2.png",
      url: "https://dev-schools-landing-page.vercel.app/",
      imageSize: 400,
    },
    {
      id: 3,
      imagePath: "/projects/project3.png",
      title: "Plataforma de marketing digital",
      url: "https://symbol-landing-page-ochre.vercel.app/",
      imageSize: 400,
    },
    {
      id: 4,
      title: "Tire store",
      imagePath: "/projects/project4.png",
      url: "https://tire-store.vercel.app",
      imageSize: 400,
    },
  ];

  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="cases"
    >
      <Title content="Cases de sucesso" />
      <Subtitle
        content="Veja abaixo algumas aplicações que foram construídas com nossa biblioteca."
        weight="light"
        className="text-center"
      />
      <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-12">
        {items.map((it, i) => (
          <FadeContainer key={it.id} delay={i * 2} once>
            <a
              className="w-full flex flex-col items-center gap-4"
              key={it.id}
              target="_blank"
              rel="noopener noreferrer"
              href={it.url}
            >
              <Title content={it.title} className="text-center" />
              <Image
                src={it.imagePath}
                alt="Chatbot"
                width={it.imageSize}
                height={it.imageSize}
              />
            </a>
          </FadeContainer>
        ))}
      </div>
    </section>
  );
}
