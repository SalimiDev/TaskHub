import { ReactNode } from "react";
import { Metadata } from "next";
import Providers from "../providers/Providers";

export const metadata: Metadata = {
  title: "TaskHub-App",
  description: "TaskHub is a platform for managing your tasks",
};
type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <Providers>{children}</Providers>;
}
