"use client";

import LandingFooter from "@/components/elements/Footer";
import { menuItems } from "@/mocks";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  return (
    <LandingFooter.Root>
      <LandingFooter.Top columns={3}>
        <LandingFooter.Column
          children={
            <div className="flex items-center gap-4">
              <Image
                width={80}
                height={80}
                src="/logo.png"
                alt="Logo da React Ultimate"
                className="object-contain h-20 sm:h-24 rounded-lg"
              />
              <span className="text-sm sm:text-base">
                React Ultimate Components
              </span>
            </div>
          }
        />
        <LandingFooter.Column
          items={menuItems.map((item) => ({
            ...item,
            href: resolveHref(item.href),
          }))}
          title="Empresa"
        />
      </LandingFooter.Top>
      <LandingFooter.Bottom>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground">
            React Ultimate © {currentYear}. Todos os direitos reservados.
            Construído utilizando React Ultimate PRO.
          </p>
          <p className="text-xs text-foreground/60">
            Desenvolvido por{" "}
            <a
              href="https://www.pablosilvadev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500"
            >
              Pablo Silva
            </a>
          </p>
        </div>
      </LandingFooter.Bottom>
    </LandingFooter.Root>
  );
}
