// index.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import ArticleCard from "./index";

type Story = StoryObj<typeof ArticleCard>;

const meta: Meta<typeof ArticleCard> = {
  title: "Cards/ArticleCard",
  component: ArticleCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          `Cartão de **artigo** para blogs/portais no mercado brasileiro.\n\n` +
          `### Características\n` +
          `- **Responsivo** (imagem, tipografia e espaçamentos por breakpoint)\n` +
          `- **Dark mode** (usa tokens \`bg-bg-card\`, \`text-foreground\` e \`border-border-card\`)\n` +
          `- **Acessível** (alt na imagem, rótulos claros, botão com foco)\n\n` +
          `### Props\n` +
          `- **imgUrl**: URL da imagem de capa\n` +
          `- **title**: título do artigo\n` +
          `- **category**: categoria/assunto (ex.: “Tecnologia”)\n` +
          `- **publishedAt**: data de publicação (ISO)\n` +
          `- **readingTime**: tempo de leitura (ex.: "4 min")\n` +
          `- **author?**: autor do artigo\n` +
          `- **description?**: resumo curto\n` +
          `- **onSeeDetails?**: callback do botão “Leia mais” (quando presente, o botão é exibido)`,
      },
    },
  },
  argTypes: {
    imgUrl: { control: "text" },
    title: { control: "text" },
    category: { control: "text" },
    description: { control: "text" },
    author: { control: "text" },
    publishedAt: { control: "text" },
    readingTime: { control: "text" },
    onSeeDetails: { action: "see-details" },
  },
  args: {
    imgUrl:
      "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Como otimizar a performance do seu app React",
    category: "Tecnologia",
    description:
      "Um guia prático com técnicas de memoização, code-splitting e renderização eficiente.",
    author: "Equipe Tech Blog",
    publishedAt: "2025-01-12T10:00:00.000Z",
    readingTime: "5 min",
  },
};
export default meta;

/* -------------------- Stories -------------------- */

export const Default: Story = {};

export const WithoutAuthor: Story = {
  args: {
    author: undefined,
    title: "Design tokens: o que são e como adotar",
    category: "Design",
    imgUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    description:
      "Entenda o conceito de tokens e como padronizar cores, tipografia e espaçamentos.",
    publishedAt: "2025-02-05T09:30:00.000Z",
    readingTime: "4 min",
  },
};

export const GridShowcase: Story = {
  render: (args) => (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ArticleCard {...args} />
      <ArticleCard
        {...args}
        title="Introdução ao Server Actions no Next.js"
        category="Backend"
        imgUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
        readingTime="6 min"
      />
      <ArticleCard
        {...args}
        title="UX Writing: microcopy que converte"
        category="UX"
        imgUrl="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop"
        readingTime="3 min"
        author="Ana Souza"
        publishedAt="2025-03-10T12:00:00.000Z"
      />
    </div>
  ),
  parameters: { layout: "centered" },
};
