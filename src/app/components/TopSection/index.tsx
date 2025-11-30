"use client";
import SplittedText from "@/components/animations-and-loading/SplittedText";
import Button from "@/components/buttons/Button";
import ProductCard from "@/components/cards/ProductCard";
import AreaChart from "@/components/charts/AreaChart";
import CompleteTable from "@/components/tables/CompleteTable";
import Subtitle from "@/components/typography/Subtitle";
import { visitDocs } from "@/utils/whatsapp";

export default function TopSection() {
  return (
    <section
      className="relative w-ful m-auto overflow-hidden bg-gradient-to-b from-secondary-600 via-secondary-600 to-secondary-400"
      id="inicio"
    >
      <div className="relative w-full max-w-[1800px] m-auto  flex flex-col xl:flex-row items-center justify-center">
        {/* content above */}
        <div className="w-full relative z-10 flex flex-col justify-evenly items-center gap-4 p-12 text-center">
          <SplittedText
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-black"
            delay={40}
            duration={0.6}
            ease="power3.out"
            onLetterAnimationComplete={() => {}}
            rootMargin="-80px"
            splitType="chars"
            tag="h2"
            text="Construa aplicações React até 7x mais rápido sem ter que pagar pelo menos 5x mais por isso."
            textAlign="left"
            threshold={0.15}
          />
          <Subtitle
            content="São mais de 120 componentes React extremamente úteis e prontos para uso. React Ultimate será a última biblioteca de componentes React que você vai precisar."
            className="text-left text-gray-800"
          />
          <div className="w-full flex gap-8">
            <a
              className="w-fit rounded-md px-5 py-3 bg-primary-500 text-white font-semibold shadow-lg hover:bg-primary-600 transition mt-4"
              href="#adquirir-react-ultimate"
            >
              Adquirir React Ultimate
            </a>
            <Button
              className="w-fit rounded-md px-5 py-3 border border-primary-500 text-primary-500 font-semibold hover:bg-primary-600 hover:text-white transition mt-4"
              onClick={visitDocs}
              label="Ver documentação"
              variant="outlined"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-7">
          <div className="lg:col-span-2">
            <CompleteTable
              countableColumnsName={[
                {
                  isMonetary: true,
                  labelReplacer: "Total Salários",
                  name: "Salário",
                },
                {
                  isMonetary: false,
                  labelReplacer: "Total Idades",
                  name: "Idade",
                },
              ]}
              data={[
                {
                  idade: 28,
                  nome: "João Silva",
                  salario: 3500.75,
                },
                {
                  idade: 32,
                  nome: "Maria Oliveira",
                  salario: 4800.1,
                },
                {
                  idade: 41,
                  nome: "Carlos Souza",
                  salario: 7200,
                },
                {
                  idade: 25,
                  nome: "Ana Costa",
                  salario: 2500.5,
                },
                {
                  idade: 36,
                  nome: "Pedro Santos",
                  salario: 6000,
                },
              ]}
              tableClassName="col-span-2"
            />
          </div>
          <ProductCard
            imageUrl="https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages8.kabum.com.br%2Fprodutos%2Ffotos%2F520368%2Fprocessador-amd-ryzen-5-5600gt-3-6-ghz-4-6ghz-max-turbo-cache-4mb-6-nucleos-12-threads-am4-100-100001488box_1708024586_gg.jpg&w=640&q=75"
            installmentValue={33.33}
            installments={3}
            onAddToCart={() => {}}
            price={799.99}
            rating={4}
            title="Processador AMD Ryzen 7 5700G, 3.8GHz (4.6GHz Max Turbo), AM4"
            className="col-span-1"
          />
          <div className="w-full p-4 pb-0 bg-bg-card border border-border-card h-fit rounded-md shadow-sm">
            <AreaChart.Root
              data={[
                {
                  label: "Seg",
                  value: 14,
                },
                {
                  label: "Ter",
                  value: 18,
                },
                {
                  label: "Qua",
                  value: 10,
                },
                {
                  label: "Qui",
                  value: 22,
                },
                {
                  label: "Sex",
                  value: 16,
                },
              ]}
              showTooltip
              legend="Vendas no dia"
              size="sm"
            >
              <AreaChart.CartesianGrid />
              <AreaChart.XAxis dataKey="label" />
              <AreaChart.YAxis />
            </AreaChart.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
