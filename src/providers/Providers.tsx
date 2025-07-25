"use client";

import { ReactNode } from "react";
import "@radix-ui/themes/styles.css";

export default function Providers({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
