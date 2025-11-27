"use client";

import { useEffect, useRef } from "react";
import type { Thesis } from "@/data/theses";

type AbstractModalProps = {
  thesis?: Thesis | null;
  open: boolean;
  onClose: () => void;
};

export function AbstractModal({ thesis, open, onClose }: AbstractModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open || !thesis) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="abstract-title"
      onClick={(event) => {
        if (event.target === overlayRef.current) {
          onClose();
        }
      }}
    >
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border/60 bg-background p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-primary">
              {thesis.strand} • {thesis.year}
            </p>
            <h3
              id="abstract-title"
              className="mt-2 text-2xl font-semibold text-foreground"
            >
              {thesis.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {thesis.authors.join(", ")}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close abstract"
            className="rounded-full border border-border/60 p-2 text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <p className="mt-6 text-base leading-relaxed text-foreground">
          {thesis.abstract}
        </p>
      </div>
    </div>
  );
}

