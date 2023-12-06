// Setup the Zustand State

import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

// en,es,de,fr,ar,zh,ms,my,ja,ta,ne,th
//TODO: Language supported declared
export type LanguagesSupported =
  | "en"
  | "es"
  | "de"
  | "fr"
  | "ar"
  | "zh"
  | "ms"
  | "my"
  | "ja"
  | "ta"
  | "ne"
  | "th";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  es: "Spanish",
  de: "German",
  fr: "French",
  ar: "Arabic",
  zh: "Chinese",
  ms: "Malay",
  my: "Myammar",
  ja: "Japanese",
  ta: "Tamil",
  ne: "Nepali",
  th: "Thai",
};

//TODO: Declare the states for Subscription

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  // FIXME: subscription properties cant be read
  setSubscription: (subscription: Subscription | null) => void;
}
//TODO: Set and Interact the Global State for Subscription
// This hooks can be used anywhere
// Custom state 
export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
