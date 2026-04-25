import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Awards — Laura Busuioc" },
      {
        name: "description",
        content:
          "CFO at Enactus UniUd, Young Talent Ambassador at Clover Venture, National Champion of Enactus Italy 2025 with project Grel.",
      },
      { property: "og:title", content: "Experience — Laura Busuioc" },
      {
        property: "og:description",
        content:
          "Roles, projects and awards: from Enactus to hackathon wins and Science Park Jönköping.",
      },
    ],
  }),
  component: Experience,
});

const roles = [
  {
    org: "Enactus UniUd",
    role: "CFO — Chief Financial Officer",
    period: "Oct 2024 — Present",
    bullets: [
      "Financial planning and resource allocation for sustainability-driven startup projects.",
      "Coordination with cross-functional teams to ensure budget compliance and project scalability.",
      "Data analysis to optimise client investment strategies.",
    ],
  },
  {
    org: "Clover Venture",
    role: "Young Talent Ambassador & Mentor",
    period: "Dec 2025 — Present",
    bullets: [
      "Mentoring participants in hackathons and startup competitions.",
      "Bridging technical ideas and business viability.",
      "Representing the organisation in high-level innovation ecosystems.",
    ],
  },
];

const projects = [
  {
    title: "Grel",
    award: "National Champion · Enactus Italy 2025",
    body: "Led the financial strategy for a project focused on environmental restoration, competing at the Enactus World Cup in Bangkok.",
  },
  {
    title: "Clarity",
    award: "Winner · Hackathon Imprenditori #GenNext Padova",
    body: "AI-based platform that simplifies access to public data for Italian SMEs. Won against 200+ participants.",
  },
  {
    title: "Grel — international",
    award: "Startup Program · Science Park Jönköping",
    body: "Developed the Grel project during the Swedish exchange, focusing on international market entry.",
  },
];

function Experience() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Experience</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1] text-balance mt-6 max-w-3xl">
            Roles, projects, <em className="text-accent not-italic">wins</em>.
          </h1>
        </section>

        {/* ROLES */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="space-y-12">
            {roles.map((r) => (
              <article key={r.org} className="grid md:grid-cols-12 gap-6 border-t border-border pt-10">
                <div className="md:col-span-3">
                  <p className="text-sm text-muted-foreground">{r.period}</p>
                </div>
                <div className="md:col-span-9 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">{r.org}</p>
                    <h3 className="font-display text-3xl mt-1">{r.role}</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="text-accent mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="border-t border-border bg-secondary/30 mt-12">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-3xl md:text-4xl mb-12">Key projects & awards</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="group rounded-2xl border border-border bg-background p-8 hover:bg-foreground hover:text-background transition-colors duration-500"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-accent group-hover:text-accent">
                    {p.award}
                  </p>
                  <h3 className="font-display text-3xl mt-4">{p.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
