"use client";
import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import MetricsCard from "@/components/cards/MetricsCard";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  CubeIcon,
  DeviceMobileCameraIcon,
  PlayCircleIcon,
  RobotIcon,
  TableIcon,
} from "@phosphor-icons/react";
import { UsersFourIcon } from "@phosphor-icons/react/dist/ssr";

export default function MetricsSection() {
  const metrics = [
    {
      preTitle: "+ de",
      title: "componentes disponíveis",
      value: 130,
      icon: (
        <CubeIcon className="w-12 h-12 sm:w-16 sm:h-16 text-primary-500" />
      ),
    },
    {
      preTitle: "+ de",
      title: "templates construidos com nossa biblioteca",
      value: 30,
      icon: (
        <TableIcon className="w-12 h-12 sm:w-16 sm:h-16 text-primary-500" />
      ),
    },
    {
      preTitle: "+ de",
      title: "clientes satisfeitos",
      value: 25,
      icon: <UsersFourIcon className="w-12 h-12 sm:w-16 sm:h-16 text-primary-500" />,
    },
  ];
  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="metricas"
    >
      <Title content="Nossas marcas" />
      <Subtitle content="Números que falam por nós." weight="light" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {metrics.map((metric) => (
          <FadeContainer key={metric.title} delay={metrics.indexOf(metric) * 2} once> 
            <MetricsCard
              preTitle={metric.preTitle}
              key={metric.title}
              title={metric.title}
              value={metric.value}
              countDuration={8}
              className={"bg-transparent border-none flex shadow-none"}
              titleClassName="text-lg sm:text-xl"
              valueClassName="text-2xl sm:text-5xl"
              icon={metric.icon}
            />
          </FadeContainer>
        ))}
      </div>
    </section>
  );
}
