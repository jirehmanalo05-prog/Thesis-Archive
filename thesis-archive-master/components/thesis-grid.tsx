"use client";

import { useState } from "react";
import type { Thesis } from "@/data/theses";
import { ThesisCard } from "./thesis-card";
import { AbstractModal } from "./abstract-modal";

type ThesisGridProps = {
  theses: Thesis[];
};

export function ThesisGrid({ theses }: ThesisGridProps) {
  const [selected, setSelected] = useState<Thesis | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {theses.map((thesis) => (
          <ThesisCard
            key={thesis.id}
            thesis={thesis}
            onViewAbstract={setSelected}
          />
        ))}
      </div>

      <AbstractModal
        thesis={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </>
  );
}

