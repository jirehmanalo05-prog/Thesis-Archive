export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-card">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-foreground">
            Curated by Our Institution
          </p>
          <p className="text-sm text-muted-foreground">
            A collaborative effort between the ICT and PBM departments to
            preserve scholarly work and spark new research partnerships.
          </p>
        </div>
        <div
          id="contact"
          className="rounded-2xl border border-border/60 bg-background/60 p-4 text-sm text-muted-foreground"
        >
          <p className="font-semibold text-foreground">Contact</p>
          <p>Email: archive@example.edu</p>
          <p>Office: Learning Commons, Room 204</p>
        </div>
      </div>
    </footer>
  );
}

