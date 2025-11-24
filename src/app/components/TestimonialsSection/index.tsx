"use client";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Carousel from "@/components/navigation/Swiper";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { testimonials } from "@/mocks";
import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fallbackTestimonials = (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {testimonials.map((it) => (
        <TestimonialCard
          key={it.id}
          avatarUrl={it.avatarUrl}
          userName={it.title}
          testimonial={it.subtitle}
          rating={it.rating}
        />
      ))}
    </div>
  );

  return (
    <section className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14">
      <Title content="Depoimentos" />
      <Subtitle
        content="Veja o depoimento de alguns desenvolvedores que utilizaram a React Ultimate para construir seus projetos."
        weight="light"
        className="text-center"
      />
      <div className="flex w-full mt-4">
        {isClient ? (
          <Carousel
            breakpoints={{
              "320": {
                rows: 1,
                slidesPerView: 1,
                spaceBetween: 8,
              },
              "640": {
                rows: 1,
                slidesPerView: 2,
                spaceBetween: 12,
              },
              "768": {
                rows: 1,
                slidesPerView: 2,
                spaceBetween: 16,
              },
              "1024": {
                rows: 1,
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            items={testimonials}
            renderItem={(it) => (
              <TestimonialCard
                key={it.id}
                avatarUrl={it.avatarUrl}
                userName={it.title}
                testimonial={it.subtitle}
                rating={it.rating}
              />
            )}
            rows={1}
            title=" "
            showNavigation={false}
            slidesPerView={3}
            spaceBetween={16}
            loop
            autoPlay
          />
        ) : (
          fallbackTestimonials
        )}
      </div>
    </section>
  );
}
