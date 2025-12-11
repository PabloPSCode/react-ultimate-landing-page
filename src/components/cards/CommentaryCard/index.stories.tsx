import type { Meta, StoryObj } from "@storybook/react-vite";
import CommentaryCard, { type CommentaryCardProps } from "./index";

type Story = StoryObj<typeof CommentaryCard>;

const meta: Meta<typeof CommentaryCard> = {
  title: "Cards/CommentaryCard",
  component: CommentaryCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Cartão de comentário simples e responsivo. Usa tokens do design system (dark-mode ready).",
      },
    },
  },
  args: {
    author: "Carlos Medeiros",
    publishDate: "2020-10-06T12:00:00.000Z",
    content:
      "Vejo que o NUBANK veio para ficar e apresentar soluções inovadoras e transparentes para seus clientes, permitindo os mesmos sonharem com o seu novo negócio, carro ou até mesmo uma viagem dos sonhos.\nParabéns por perseverar e desbancar a concorrência dos grandes bancos!",
    className: "",
  },
  argTypes: {
    author: { control: "text" },
    publishDate: { control: "text" },
    content: { control: "text" },
    className: { control: "text" },
  },
};
export default meta;

/* ================================== Stories ================================== */

export const Default: Story = {};

export const LongContent: Story = {
  args: {
    content:
      "Comecei a usar o produto há alguns meses e posso dizer que a experiência melhorou muito minha rotina. " +
      "A interface é limpa, o suporte resolve rápido e a equipe lança novidades com frequência. " +
      "Espero que adicionem integrações com mais serviços em breve. Recomendo! \n\n" +
      "Pontos positivos: performance, UX e política de preços. Pontos a melhorar: onboarding para equipes grandes.",
  },
};

export const ListShowcase: Story = {
  render: (args) => {
    const items: CommentaryCardProps[] = [
      args,
      {
        author: "Ana Paula",
        publishDate: "2023-04-12",
        content:
          "Adorei o material! Didático, direto e com ótimos exemplos práticos. Já compartilhei com o time.",
      },
      {
        author: "Rafael Lima",
        publishDate: "2024-01-08",
        content:
          "Funciona muito bem no celular. A responsividade está impecável — parabéns à equipe de UI.",
      },
    ];
    return (
      <div className="w-full max-w-5xl grid gap-4 sm:gap-5 md:grid-cols-2">
        {items.map((item, i) => (
          <CommentaryCard key={i} {...item} />
        ))}
      </div>
    );
  },
  parameters: { layout: "centered" },
};
