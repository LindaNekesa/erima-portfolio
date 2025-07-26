// components/context/ScrollSpyProvider.tsx
import React, { useState } from "react";
import { ScrollSpyContext } from "./scrollspycontext"; // Capitalized to match file name

export const ScrollSpyProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeId, setActiveId] = useState<string>("");

  return (
    <ScrollSpyContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ScrollSpyContext.Provider>
  );
};
