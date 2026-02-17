import Image from "next/image"

export function HeroSection() {
  return (
    <section className="flex items-center justify-center px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-10">
          <h1 className="text-balance font-sans text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {"Gotowy na co\u015B wi\u0119cej ni\u017C zwyk\u0142\u0105 rozmow\u0119?"}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Flirt, napi\u0119cie i ekscytacja bez granic. Zobacz zdj\u0119cia, obejrzyj filmy i zdecyduj, dok\u0105d zaprowadzi Ci\u0119 ta noc."}
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://radarkobiet.pl/link/3024/69385785"
              className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {"Moje zdj\u0119cia i filmy"}
            </a>
            <a
              href="https://radarkobiet.pl/link/3024/69385785"
              className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {"Kontakt i spotkania"}
            </a>
          </div>
        </div>

        <div className="w-full max-w-md overflow-hidden rounded-lg">
          <Image
            src="https://r.mobirisesite.com/1676590/assets/images/image2012-768x1360.jpeg?v=1VQk6W"
            alt="OFSINNIA"
            width={768}
            height={1360}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
