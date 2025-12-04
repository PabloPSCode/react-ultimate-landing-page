// components/cart/CartCard/index.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import type { Product } from "./components/CartItem";
import CartCard from "./index";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "p-1",
    name: "Headphone Bluetooth ZX-100",
    price: 249.9,
    imageUrl:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 1,
  },
  {
    id: "p-2",
    name: "Macbook Pro 16'' 2023",
    price: 1399.9,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
    quantity: 2,
  },
  {
    id: "p-3",
    name: "Mouse Gamer 18K DPI",
    price: 189.9,
    imageUrl:
      "https://images.unsplash.com/photo-1727417453138-7d8efdd70fb3?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 1,
  },
];

const meta: Meta<typeof CartCard> = {
  title: "Cards/CartCard",
  component: CartCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "CartCard é um **resumo compacto** do carrinho, ideal para sidebars ou colunas em checkout. Responsivo, dark-mode ready e com rolagem quando há muitos itens.",
      },
    },
  },
  argTypes: {
    products: { control: "object" },
    emptyCartCardMessage: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[60vh] w-full bg-background p-4 sm:p-8 text-foreground">
        <div className="mx-auto max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof CartCard>;

export const Default: Story = {
  args: {
    products: MOCK_PRODUCTS,
  },
};

export const Empty: Story = {
  args: {
    products: [],
    emptyCartCardMessage: "Nenhum item no carrinho no momento.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Estado vazio com mensagem customizável via `emptyCartCardMessage`.",
      },
    },
  },
};

