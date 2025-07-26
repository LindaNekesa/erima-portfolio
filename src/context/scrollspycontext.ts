// components/context/ScrollSpyContext.ts
import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

// Type of the context value
export interface ScrollSpyContextType {
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
}

// Create the context
export const ScrollSpyContext = createContext<ScrollSpyContextType | null>(null);

// Hook to consume the context
export const useScrollSpy = () => {
  const context = useContext(ScrollSpyContext);
  if (!context) {
    throw new Error("useScrollSpy must be used within a ScrollSpyProvider");
  }
  return context;
};
