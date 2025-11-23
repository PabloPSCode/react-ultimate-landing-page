/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react-vite";
import PlanCard from ".";

const meta = {
  title: "Cards/PlanCard",
  component: PlanCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Card de plano com selo de destaque, gradiente no cabeçalho, lista de vantagens e suporte a dark mode.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-background p-4 text-foreground">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PlanCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseAdvantages = [
  "20 GB de armazenamento de vídeos",
  "até 15 usuários gratuitos",
  "ferramenta de quiz disponível",
  "emissão automática de certificados",
];

export const Default: Story = {
  args: {
    title: "Bronze",
    subtitle: "Experimente 7 dias grátis",
    price: "R$ 249,90",
    priceSuffix: "/mês",
    priceNote: "+ R$ 6,90/usuário adicional",
    advantages: baseAdvantages,
  },
};

export const Showcase: Story = {
  args: {} as any,
  render: () => (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <PlanCard
        title="Bronze"
        advantages={baseAdvantages}
        subtitle="Experimente 7 dias grátis"
        price="R$ 249,90"
        priceSuffix="/mês"
        priceNote="+ R$ 6,90/usuário adicional"
      />

      <PlanCard
        title="Silver"
        isBestOption
        advantages={[
          "30 GB de armazenamento de vídeos",
          "até 25 usuários gratuitos",
          "ferramenta de quiz disponível",
          "emissão automática de certificados",
          "assistência da IA para correção dos questionários",
        ]}
        subtitle="Experimente 7 dias grátis"
        price="R$ 349,90"
        priceSuffix="/mês"
        priceNote="+ R$ 7,90/usuário adicional"
      />

      <PlanCard
        title="Gold"
        advantages={[
          "50 GB de armazenamento de vídeos",
          "até 40 usuários gratuitos",
          "ferramenta de quiz disponível",
          "emissão automática de certificados",
          "assistência da IA para correção dos questionários",
        ]}
        subtitle="Experimente 7 dias grátis"
        price="R$ 599,90"
        priceSuffix="/mês"
        priceNote="+ R$ 9,90/usuário adicional"
      />
    </div>
  ),
};
