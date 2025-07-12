"use client";

import { ReactNode } from "react";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function Providers({ children }: { children: ReactNode }) {
  return <Theme>{children}</Theme>;
}
