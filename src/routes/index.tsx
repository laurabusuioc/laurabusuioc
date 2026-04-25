import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/laura-portrait.jpg";
import pitching from "@/assets/laura-pitching.jpg";
import cern from "@/assets/laura-cern.jpg";
import sweden from "@/assets/laura-sweden.jpg";
import dankook from "@/assets/dankook-korea.jpg";

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
                I'm Laura, a Management Engineer blending financial
                strategy, international experience and a strong passion for
                <em className="text-accent not-italic"> entrepreneurial projects</em> and
                <em className="text-accent not-italic"> innovation</em>.
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

        {/* LANGUAGES */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-center mb-6">
              Four languages · International mobility in 2 countries
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                ["🇮🇹", "Italian", "Native"],
                ["🇷🇴", "Romanian", "Native"],
                ["🇬🇧", "English", "C1"],
                ["🇪🇸", "Spanish", "A2"],
              ].map(([flag, lang, level]) => (
                <div key={lang} className="text-center md:text-left">
                  <p className="text-3xl mb-2">{flag}</p>
                  <p className="font-display text-2xl">{lang}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ON STAGE */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="relative rounded-[2rem] overflow-hidden">
              <img
                src={pitching}
                alt="Laura Busuioc pitching on stage at Enactus — 'We throw away what the Earth gives us and pay to poison it.'"
                className="w-full h-[60vh] md:h-[70vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-background">
                <p className="text-xs uppercase tracking-[0.25em] opacity-80">On stage · Enactus 2025</p>
                <p className="font-display text-2xl md:text-4xl mt-3 max-w-2xl text-balance leading-tight">
                  "We throw away what the Earth gives us — and pay to poison it."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY — STUDIES & MOBILITIES */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Journey</p>
              <h2 className="font-display text-3xl md:text-5xl mt-4 leading-[1.05] text-balance">
                Three campuses, one <em className="not-italic text-accent">curriculum</em>.
              </h2>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                Management Engineering between Italy, Sweden and South Korea —
                a path designed to learn how operations, capital and culture
                shape global business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  img: portrait,
                  flag: "🇮🇹",
                  place: "Udine, Italy",
                  period: "2023 — 2026",
                  title: "Università degli Studi di Udine",
                  body: "BSc Management Engineering. Operations, business strategy, statistics and industrial logistics — the foundation.",
                },
                {
                  img: sweden,
                  flag: "🇸🇪",
                  place: "Jönköping, Sweden",
                  period: "Aug 2025 — Jan 2026",
                  title: "Jönköping University · Erasmus",
                  body: "International exchange and Startup Program: building a venture from scratch with a multicultural team. Wearing the legendary 'ovve' overalls.",
                },
                {
                  img: dankook,
                  flag: "🇰🇷",
                  place: "Cheonan, South Korea",
                  period: "Aug — Dec 2026",
                  title: "Dankook University · International Mobility",
                  body: "International mobility focused on technology management, innovation and global business — next stop on the route.",
                  contain: true,
                },
              ].map((s) => (
                <article key={s.title} className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] mb-5 bg-secondary">
                    <img
                      src={s.img}
                      alt={`${s.title} — ${s.place}`}
                      className={`w-full h-full ${s.contain ? "object-contain p-10" : "object-cover"} group-hover:scale-[1.03] transition duration-500`}
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    {s.flag} {s.place} · {s.period}
                  </p>
                  <h3 className="font-display text-xl mt-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BEYOND THE CLASSROOM */}
        <section className="bg-secondary/40 border-y border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <img
                src={cern}
                alt="Laura Busuioc visiting CERN in Geneva"
                className="w-full aspect-[4/3] object-cover rounded-[2rem]"
              />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-4 px-2">
                CERN · Geneva, Switzerland
              </p>
            </div>
            <div className="md:col-span-6 space-y-6">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Beyond the classroom</p>
              <h2 className="font-display text-3xl md:text-4xl leading-[1.1] text-balance">
                Curiosity that travels — from <em className="not-italic text-accent">CERN</em> to startup pitches.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Visiting CERN in Geneva, joining the Startup Program in Sweden,
                and competing in hackathons across the world — both as a student
                and as a mentor. Every experience adds a new lens on how to
                turn ideas into impact.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "🧪 CERN visit — research, physics & big-science management",
                  "🚀 Startup Program @ Jönköping — venture building, end to end",
                  "🏆 Hackathons — competitor & mentor across multiple editions",
                ].map((i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-accent mt-[3px]">◆</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
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
