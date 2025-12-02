import type { Meta, StoryObj } from "@storybook/react";
import FaqCollapsibleCard from "./index";

const SAMPLE_QUESTIONS: { id: string; question: string; answer: string }[] = [
  {
    id: "1",
    question: "Como escolho o plano ideal para a minha empresa?",
    answer:
      "Avalie quantos usuários vão acessar a plataforma e a quantidade de vídeos que você pretende armazenar. Comece no plano menor e evolua conforme a necessidade.",
  },
  {
    id: "2",
    question: "Posso adicionar mais usuários depois?",
    answer:
      "Sim. Você pode adicionar usuários a qualquer momento. O custo adicional é calculado automaticamente no próximo ciclo de pagamento.",
  },
  {
    id: "3",
    question: "O acesso é liberado imediatamente?",
    answer:
      "Após a confirmação do pagamento, o acesso é liberado na hora e você já pode criar o seu usuário administrador.",
  },
  {
    id: "4",
    question: "Como falar com o suporte?",
    answer:
      "Use o menu de perguntas dentro da plataforma ou envie um e-mail para pscodecontato@gmail.com. Respondemos rapidamente.",
  },
];

const meta: Meta<typeof FaqCollapsibleCard> = {
  title: "Cards/FaqCollapsibleCard",
  component: FaqCollapsibleCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Card de perguntas frequentes com colapsáveis. Usa tokens (`bg-bg-card`, `border-border-card`, `text-foreground`) para garantir responsividade e suporte a dark mode.",
      },
    },
  },
  argTypes: {
    questions: {
      control: "object",
      description: "Lista de perguntas e respostas exibidas no acordeão.",
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-6 text-foreground">
        <div className="mx-auto max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FaqCollapsibleCard>;

export const Default: Story = {
  args: {
    questions: SAMPLE_QUESTIONS,
  },
};

export const CompactList: Story = {
  args: {
    questions: SAMPLE_QUESTIONS.slice(0, 3),
  },
  parameters: {
    docs: {
      description: {
        story: "Versão enxuta com apenas três perguntas.",
      },
    },
  },
};
