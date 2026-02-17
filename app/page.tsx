import { headers } from "next/headers"
import { HeroSection } from "@/components/hero-section"
import { AgeGate } from "@/components/age-gate"
import type { Locale } from "@/lib/locale"

export default async function Home() {
  const headersList = await headers()
  const country = headersList.get("x-vercel-ip-country") ?? ""
  const locale: Locale = country === "PL" ? "pl" : "en"

  return (
    <AgeGate locale={locale}>
      <main className="min-h-screen bg-background">
        <HeroSection locale={locale} />
      </main>
    </AgeGate>
  )
}
