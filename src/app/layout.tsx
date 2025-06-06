// /app/layout.tsx

import "./globals.css";
import React from "react";
import { Metadata } from "next";
import Providers from "../providers/Providers";

export const metadata: Metadata = {
  title: "TaskHub-App",
  description: "TaskHub is a platform for managing your tasks",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
