import { Target, Lock, ShieldCheck, TimerReset } from "lucide-react";

export const TRUST_DATA = [
  {
    id: "trust-precision",
    icon: Target,
    title: "NASA JPL Ephemeris Precision",
    description:
      "Computed using Swiss Ephemeris DE431 integration, accurate to 0.001 arcseconds.",
  },
  {
    id: "trust-privacy",
    icon: Lock,
    title: "100% Cryptographic Privacy",
    description:
      "Zero logs stored. Consultations protected by end-to-end symmetric encryption.",
  },
  {
    id: "trust-verification",
    icon: ShieldCheck,
    title: "5-Stage Gurukul Verification",
    description:
      "Every scholar undergoes strict oral examination and client trial reviews.",
  },
  {
    id: "trust-assurance",
    icon: TimerReset,
    title: "3-Minute Assurance Policy",
    description:
      "Instant fee refund credit if you feel disconnected within the first 3 minutes.",
  },
];
