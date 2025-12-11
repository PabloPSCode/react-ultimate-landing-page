"use client";
import applyGoogleTranslateDOMPatch from "@/utils/applyGoogleTranslateDOMPatch";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    applyGoogleTranslateDOMPatch();
  }, []);

  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden pt-12 md:pt-16"></div>
  );
}
