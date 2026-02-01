'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

const SectionTitleContext = createContext<{
  sectionTitle: string | null;
  setSectionTitle: (title: string | null) => void;
}>({ sectionTitle: null, setSectionTitle: () => {} });

export function SectionTitleProvider({ children }: { children: ReactNode }) {
  const [sectionTitle, setSectionTitle] = useState<string | null>(null);
  return (
    <SectionTitleContext.Provider value={{ sectionTitle, setSectionTitle }}>
      {children}
    </SectionTitleContext.Provider>
  );
}

export function useSectionTitle() {
  return useContext(SectionTitleContext);
}
