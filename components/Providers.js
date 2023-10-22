"use client";

import { StateContext } from "@context/StateContext";

export function Providers({ children }) {
  return (
      <StateContext>{children}</StateContext>    
  );
}