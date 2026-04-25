import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import speaking from "@/assets/laura-speaking.jpg";
import worldcup from "@/assets/laura-worldcup.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Laura Busuioc" },
      {
        name: "description",
        content:
          "Management Engineering student at Università di Udine, with exchanges in Sweden and South Korea. Languages, skills and the path so far.",
      },
      { property: "og:title", content: "About Laura Busuioc" },
      {
        property: "og:description",
        content:
          "Industrial management, financial strategy and an international curriculum across Italy, Sweden and South Korea.",
      },
      { property: "og:image", content: speaking },
    ],
  }),
  component: About,
});

const education = [
  {
    school: "Università degli Studi di Udine",
    place: "Italy",
    degree: "BSc Management Engineering",
    period: "Oct 2023 – Jul 2026",
    notes: "Operations Management · Business Strategy · Statistics · Industrial Logistics",
  },
  {
    school: "Jönköping University",
    place: "Sweden",
    degree: "International Exchange",
    period: "Aug 2025 – Jan 2026",
    notes: "Engineering Management & Problem Solving in a global context",
  },
  {
    school: "Dankook University",
    place: "South Korea",
    degree: "International Mobility",
    period: "Aug 2026 – Dec 2026",
    notes: "Technology Management · Innovation · Global Business",
  },
];

const skills = {
  Languages: ["Italian — Native", "Romanian — Native", "English — C1 Trinity", "Spanish — A2"],
  Technical: ["Financial Modeling", "Business Analysis", "Project Management (Agile/Scrum)", "Data Analysis"],
  Tools: ["Microsoft Office (Adv. Excel)", "AI & ML Basics — Aulab", "SQL"],
  Soft: ["International Collaboration", "Public Speaking", "Leadership", "Mentoring"],
};

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About</p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1] text-balance">
              Numbers with a <em className="text-accent not-italic">creative</em> streak.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Management Engineering student driven by entrepreneurship
              and startup creation. I love mixing data analysis with a touch of
              creativity — turning rational decisions into ideas with real
              growth potential.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My engineering background helps me handle numbers with rigor;
              my creative side keeps me innovating. I look for challenges and
              opportunities to grow professionally and personally — always
              ready to engage in a multidisciplinary context.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside the classroom, I serve as CFO of Enactus UniUd, mentor
              at Clover Venture, and hands-on contributor to ventures that put
              sustainability at the core of the business model.
            </p>
          </div>
          <div className="md:col-span-5 space-y-4">
            <img
              src={speaking}
              alt="Laura Busuioc with Enactus UniUd team — National Champions 2025"
              className="w-full aspect-[4/5] object-cover rounded-[2rem]"
            />
            <figcaption className="text-xs uppercase tracking-[0.2em] text-muted-foreground px-2">
              Enactus National Champions · Italy 2025
            </figcaption>
          </div>
        </section>

        {/* WORLD CUP */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <img
                src={worldcup}
                alt="Team Italy at the Enactus World Cup 2025 in Bangkok, Thailand"
                className="w-full aspect-[4/3] object-cover rounded-[2rem]"
              />
            </div>
            <div className="md:col-span-5 order-1 md:order-2 space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Bangkok 2025</p>
              <h2 className="font-display text-3xl md:text-4xl leading-[1.05] text-balance">
                Representing Italy at the <em className="not-italic text-accent">Enactus World Cup</em>.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                After winning the National Competition, our team flew to
                Bangkok to compete on the global stage — pitching impact-driven
                entrepreneurship under the theme <em>"Carbon Captured, Future Secured"</em>.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="font-display text-3xl md:text-4xl">Education</h2>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                3 countries · 2026 grad
              </p>
            </div>
            <div className="space-y-px bg-border">
              {education.map((e) => (
                <div
                  key={e.school}
                  className="bg-background grid md:grid-cols-12 gap-4 px-6 py-8 hover:bg-card transition"
                >
                  <div className="md:col-span-3 text-sm text-muted-foreground">{e.period}</div>
                  <div className="md:col-span-5">
                    <p className="font-display text-xl">{e.school}</p>
                    <p className="text-sm text-muted-foreground">{e.place}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="font-medium">{e.degree}</p>
                    <p className="text-sm text-muted-foreground mt-1">{e.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl mb-12">Skills & toolkit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="rounded-2xl border border-border p-6 bg-card">
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">{cat}</p>
                <ul className="space-y-2 text-sm">
                  {items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
