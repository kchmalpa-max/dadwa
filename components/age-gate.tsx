"use client"

import { useState } from "react"
import { translations, type Locale } from "@/lib/locale"

const AGE_OPTIONS = ["18-24", "25-34", "35-44", "45-54", "55+"]

const REDIRECT_URL = "https://radarkobiet.pl/link/3115/69385785"

export function AgeGate({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: Locale
}) {
  const [verified, setVerified] = useState(false)
  const t = translations[locale]

  function handleSelect(option: string) {
    if (option === "45-54" || option === "55+") {
      window.location.href = REDIRECT_URL
    } else {
      setVerified(true)
    }
  }

  if (verified) {
    return <>{children}</>
  }

  return (
    <>
      {/* Blurred background */}
      <div className="pointer-events-none blur-sm" aria-hidden="true">
        {children}
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-2xl">
          <h2 className="text-balance text-center font-sans text-2xl font-bold text-foreground">
            {t.ageTitle}
          </h2>
          <p className="mt-2 text-pretty text-center text-sm leading-relaxed text-muted-foreground">
            {t.ageSubtitle}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {AGE_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="w-full rounded-md border border-border bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
