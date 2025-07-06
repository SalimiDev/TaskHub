import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("title"),
  };
}
export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
