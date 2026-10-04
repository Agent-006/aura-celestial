import {
  LunarDossierBanner,
  HarmonyProtocols,
  MoonPhaseResults,
  EphemerisMatrix,
  MoonPhaseForm,
} from "@/features/calculators/moon-phase";
import {
  CalculatorHeader,
  IngressPanel,
} from "@/features/calculators/components/shared";
import styles from "./moon-phase.module.scss";
import { Button } from "@/components/ui/Button";

export default function MoonPhasePage() {
  return (
    <div className={styles.pageContainer}>
      <CalculatorHeader
        eyebrow="AURA CELESTIAL // OBSERVATORY SUITE 02 | LUNAR EPHEMERIS ENGINE"
        title="Moon Phase & Sacred Tithi Cockpit"
        description="High-precision computation of Chandra (Moon) illumination, exact Tithi boundaries, and lunar phase chronometry."
        badge={
          <div className={styles.statusBadge}>
            LUNAR ORBITAL TELEMETRY [ACTIVE]
          </div>
        }
      />
      <IngressPanel
        title="LUNAR DATUM INGRESS"
        headerRight={
          <span className={styles.calibrationTag}>
            [TOPOCENTRIC CALIBRATION]
          </span>
        }
        footerLeft="● Ephemeris engine synchronized with NASA JPL Horizons data."
        footerRight={
          <Button type="submit" form="moon-phase-form" variant="solid">
            Calculate Moon Phase ✦
          </Button>
        }
      >
        <MoonPhaseForm />
      </IngressPanel>

      <MoonPhaseResults />
      <EphemerisMatrix />
      <HarmonyProtocols />
      <LunarDossierBanner />
    </div>
  );
}
