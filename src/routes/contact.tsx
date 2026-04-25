import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Laura Busuioc" },
      {
        name: "description",
        content:
          "Get in touch with Laura Busuioc — collaborations, mentoring, speaking, or just a coffee.",
      },
      { property: "og:title", content: "Contact Laura Busuioc" },
      {
        property: "og:description",
        content: "Open to collaborations, mentoring and speaking opportunities.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 pt-24 pb-32 text-center space-y-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] text-balance">
            Let's build something <em className="text-accent not-italic">that matters</em>.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Open to collaborations on sustainable ventures, mentoring slots,
            speaking invitations, and serendipitous conversations between Udine,
            Jönköping and Seoul.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-6 text-left">
            {[
              { label: "LinkedIn", handle: "Laura Busuioc", href: "https://www.linkedin.com/in/laura-busuioc-9a9570298" },
              { label: "Instagram", handle: "@lauraabusuioc", href: "https://www.instagram.com/lauraabusuioc/" },
              { label: "Facebook", handle: "Laura Busuioc", href: "https://www.facebook.com/profile.php?id=100008640614297&locale=it_IT" },
              { label: "Email", handle: "laurabusuioc2004@gmail.com", href: "mailto:laurabusuioc2004@gmail.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-2xl border border-border p-6 hover:bg-secondary transition"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{s.label}</p>
                <p className="mt-2 font-display text-xl break-words">{s.handle}</p>
              </a>
            ))}
          </div>

          <div className="pt-8">
            <a
              href="/CV-Laura-Busuioc.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition"
            >
              Download CV (PDF)
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
