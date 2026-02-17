export type Locale = "pl" | "en"

export const translations = {
  pl: {
    heroTitle: "Gotowy na co\u015B wi\u0119cej ni\u017C zwyk\u0142\u0105 rozmow\u0119?",
    heroDescription:
      "Flirt, napi\u0119cie i ekscytacja bez granic. Zobacz zdj\u0119cia, obejrzyj filmy i zdecyduj, dok\u0105d zaprowadzi Ci\u0119 ta noc.",
    ctaPhotos: "Moje zdj\u0119cia i filmy",
    ctaContact: "Kontakt i spotkania",
    ageTitle: "Ile masz lat?",
    ageSubtitle: "Wybierz sw\u00F3j przedzia\u0142 wiekowy, aby kontynuowa\u0107.",
    metaDescription: "Flirt, napi\u0119cie i ekscytacja bez granic.",
  },
  en: {
    heroTitle: "Ready for something more than just a conversation?",
    heroDescription:
      "Flirtation, tension and excitement without limits. See photos, watch videos and decide where this night takes you.",
    ctaPhotos: "My photos and videos",
    ctaContact: "Contact and meetings",
    ageTitle: "How old are you?",
    ageSubtitle: "Select your age range to continue.",
    metaDescription: "Flirtation, tension and excitement without limits.",
  },
} as const
