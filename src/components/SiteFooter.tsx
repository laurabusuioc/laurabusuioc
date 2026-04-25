export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-display text-base text-foreground">Laura Busuioc</p>
        <p>© {new Date().getFullYear()} — Management Engineer in the making.</p>
        <a
          href="mailto:laura.busuioc@example.com"
          className="hover:text-foreground transition-colors"
        >
          laura.busuioc@example.com
        </a>
      </div>
    </footer>
  );
}
