"use client";
import LandingHeader from "@/components/elements/LandingHeader";
import useTheme from "@/hooks/useTheme";
import { menuItems } from "@/mocks";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  const handleToggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <LandingHeader.Root bordered sticky>
      <LandingHeader.Left className="flex flex-col items-start justify-center h-full bg-background">
        <Image
          width={172}
          height={50}
          src="/logo.png"
          alt="Logo da Symbol"
          className="object-contain h-10 sm:h-14 hover:animate-spin"
        />
      </LandingHeader.Left>
      <LandingHeader.Center>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href} className="inline-block mx-2">
                <a
                  href={resolveHref(item.href)}
                  target={item.target}
                  rel={
                    item.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  className="text-sm sm:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </LandingHeader.Center>
      <LandingHeader.Right>
        <a
          className="w-fit rounded-md text-primary-500 font-semibold mr-8"
          href={
            pathname.includes("cliente") || pathname.includes("success")
              ? "/#adquirir-react-ultimate"
              : "#adquirir-react-ultimate"
          }
        >
          Adquirir React Ultimate PRO
        </a>
        <button
          className="text-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <LandingHeader.MobileMenuToggle
          open={showMobileMenu}
          onToggle={handleToggleMobileMenu}
        />
      </LandingHeader.Right>
      <LandingHeader.MobileMenuPanel open={showMobileMenu}>
        <LandingHeader.Nav>
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li
                key={item.href}
                className="inline-block mx-2 mb-2"
                onClick={handleToggleMobileMenu}
              >
                <a
                  href={resolveHref(item.href)}
                  target={item.target}
                  rel={
                    item.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  className="text-sm sm:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </LandingHeader.Nav>
      </LandingHeader.MobileMenuPanel>
    </LandingHeader.Root>
  );
}
