// index.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import ArticleImage, { type ArticleImageProps } from "./index";

type Story = StoryObj<typeof ArticleImage>;

const meta: Meta<typeof ArticleImage> = {
  title: "Media/ArticleImage",
  component: ArticleImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Card de artigo baseado em **imagem com overlay**. Responsivo, com dark-mode e variação `isMain` para destaque. Observação: utilize col-span em grids para ajustar largura quando o artigo for o principal.",
      },
    },
  },
  args: {
    title:
      "Guia completo do Tesouro Direto: rendimentos, prazos e como escolher",
    imgUrl:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2025-02-15T11:20:00Z",
    readingTime: "7 min",
    href: "#",
    newTab: false,
    isMain: false,
  },
  argTypes: {
    imgUrl: { control: "text" },
    title: { control: "text" },
    publishedAt: { control: "text" },
    readingTime: { control: "text" },
    href: { control: "text" },
    newTab: { control: "boolean" },
    isMain: { control: "boolean" },
    className: { control: "text" },
    imageClassName: { control: "text" },
    overlayClassName: { control: "text" },
    titleClassName: { control: "text" },
  },
};
export default meta;

/* ===================== Stories ===================== */

export const Default: Story = {
  render: (args) => (
    // Give it a width so aspect-ratio can compute height
    <div className="w-[340px] sm:w-[420px] md:w-[520px]">
      <ArticleImage {...args} />
    </div>
  ),
};

export const MainHighlight: Story = {
  args: {
    isMain: true,
    title:
      "Guia completo do Tesouro Direto: rendimentos, prazos e como escolher",
    imgUrl:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  render: (args) => (
    // Wider container for the main highlight variant
    <div className="w-[560px] sm:w-[680px] md:w-[820px]">
      <ArticleImage {...args} />
    </div>
  ),
};

export const LinkNewTab: Story = {
  args: {
    href: "https://example.com/artigo",
    newTab: true,
    title: "Abrindo em nova aba — boas práticas de UX e acessibilidade",
    imgUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  render: (args) => (
    <div className="w-[340px] sm:w-[420px] md:w-[520px]">
      <ArticleImage {...args} />
    </div>
  ),
};

export const GridShowcase: Story = {
  render: () => {
    const cards: ArticleImageProps[] = [
      {
        isMain: true,
        title:
          "Como investir na crise: estratégias para potencializar seu dinheiro",
        publishedAt: "2025-01-23T12:00:00Z",
        readingTime: "8 min",
        href: "#",
        imgUrl:
          "https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Renda fixa ou variável? Entenda qual faz mais sentido",
        publishedAt: "2025-02-02T10:00:00Z",
        readingTime: "5 min",
        href: "#",
        imgUrl:
          "https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title:
          "Tesouro Selic: por que é a porta de entrada de muitos investidores",
        publishedAt: "2025-02-10T08:00:00Z",
        readingTime: "6 min",
        href: "#",
        imgUrl:
          "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Planejamento financeiro em 30 minutos: passo a passo",
        publishedAt: "2025-02-12T09:30:00Z",
        readingTime: "4 min",
        href: "#",
        imgUrl:
          "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];

    return (
      <div className="max-w-6xl w-full pl-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <ArticleImage {...cards[0]} />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <ArticleImage {...cards[1]} />
            <ArticleImage {...cards[2]} />
            <ArticleImage {...cards[3]} />
          </div>
        </div>
      </div>
    );
  },
  parameters: { layout: "fullscreen" },
};
