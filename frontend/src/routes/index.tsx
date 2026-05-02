import { createFileRoute } from "@tanstack/react-router";

import { ThemeProvider } from "@/components/cv/ThemeProvider";
import { TopBar } from "@/components/cv/TopBar";
import { Hero } from "@/components/cv/Hero";
import { About } from "@/components/cv/About";
import { Stack } from "@/components/cv/Stack";
import { Projects } from "@/components/cv/Projects";
import { Experience } from "@/components/cv/Experience";
import { Contact } from "@/components/cv/Contact";
import { Testimonials } from "@/components/cv/Testimonals";
import { InteractiveBackground } from "@/components/cv/InteractiveBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ada Okafor — Software Engineer" },
      {
        name: "description",
        content:
          "Full-stack engineer building fast, reliable web products with TypeScript, React, Go, and Rust. Open-source contributor and indie builder.",
      },
      { property: "og:title", content: "Ada Okafor — Software Engineer" },
      {
        property: "og:description",
        content: "Developer portfolio: tech stack, projects, and experience.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <InteractiveBackground />
      <main className="relative">
        <TopBar />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </ThemeProvider>
  );
}