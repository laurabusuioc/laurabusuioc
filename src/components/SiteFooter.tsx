const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/laura-busuioc-9a9570298" },
  { label: "Instagram", href: "https://www.instagram.com/lauraabusuioc/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100008640614297&locale=it_IT" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-display text-base text-foreground">Laura Busuioc</p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} — Laura Busuioc</p>
      </div>
    </footer>
  );
}
