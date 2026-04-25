import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/laura-portrait.jpg";
import pitching from "@/assets/laura-pitching.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laura Busuioc — Management Engineer & CFO Enactus UniUd" },
      {
        name: "description",
        content:
          "Personal site of Laura Busuioc — Management Engineering student, CFO of Enactus UniUd, national champion of Enactus Italy 2025.",
      },
      { property: "og:title", content: "Laura Busuioc — Management Engineer" },
      {
        property: "og:description",
        content:
          "Building financial strategy for sustainability-driven ventures. Italy · Sweden · South Korea.",
      },
      { property: "og:image", content: portrait },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Udine · Jönköping · Seoul
              </p>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
                Engineering numbers <em className="text-accent not-italic">into</em> impact.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                I'm Laura — a Management Engineering student blending financial
                strategy, international experience and a stubborn belief that
                business can serve the planet.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/experience"
                  className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition"
                >
                  See what I've built →
                </Link>
                <a
                  href="/CV-Laura-Busuioc.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="absolute -inset-4 bg-accent/30 rounded-[2rem] -rotate-3" />
              <img
                src={portrait}
                alt="Portrait of Laura Busuioc"
                className="relative w-full aspect-[4/5] object-cover rounded-[2rem] grayscale-[0.15]"
              />
              <div className="absolute -bottom-5 -left-5 bg-background border border-border rounded-2xl px-4 py-3 shadow-sm">
                <p className="font-display text-2xl leading-none">CFO</p>
                <p className="text-xs text-muted-foreground mt-1">Enactus UniUd</p>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE / FACTS */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ["3", "Countries"],
              ["1st", "Enactus Italy 2025"],
              ["200+", "Beaten at Hackathon"],
              ["C1", "English · Trinity"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-4xl">{n}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SHORT INTRO */}
        <section className="mx-auto max-w-4xl px-6 py-24 text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            About
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-balance leading-tight">
            From Udine to Bangkok — chasing problems worth solving.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With a focus on industrial management and financial strategy, I've
            led the finance side of <em>Grel</em>, a sustainability project that
            won us the Enactus Italy 2025 national title and a seat at the
            Enactus World Cup.
          </p>
          <Link
            to="/about"
            className="inline-block text-sm font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition"
          >
            Read the full story
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
