import { HeroSection } from "@/components/hero-section"
import { AgeGate } from "@/components/age-gate"

export default function Home() {
  return (
    <AgeGate>
      <main className="min-h-screen bg-background">
        <HeroSection />
      </main>
    </AgeGate>
  )
}
