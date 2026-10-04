import {
  CalculatorHeader,
  IngressPanel,
} from "@/features/calculators/components/shared";
import {
  LoveCompatibilityForm,
  LoveCompatibilityResults,
  LoveCompatibilityDataGrids,
} from "@/features/calculators/love-compatibility";
import { Button } from "@/components/ui/Button";
import styles from "./love-compatibility.module.scss";

export default function LoveCalculatorPage() {
  return (
    <div className={styles.pageContainer}>
      <CalculatorHeader
        eyebrow="AURA CELESTIAL // OBSERVATORY SUITE 04 | SWISS EPHEMERIS DE431 INTEGRATED"
        title="Love Calculator & Astrological Synastry Cockpit"
        description="Sub-arcsecond dual natal vector synthesis computing classical Ashtakoota 36-Gunas love compatibility, Venus-Mars magnetic polarity, planetary cross-aspects, and karmic union longevity."
        badge={
          <div className={styles.concordanceBadge}>
            REAL-TIME CONCORDANCE [PENDING]
          </div>
        }
      />
      <IngressPanel
        title="DUAL NATAL VECTOR INGRESS"
        headerRight={
          <span className={styles.calibrationText}>
            [CHITRAPAKSHA CALIBRATION]
          </span>
        }
        footerLeft="● Telemetry link synchronized with Swiss Ephemeris micro-daemon."
        footerRight={
          <Button type="submit" form="love-compatibility-form" variant="solid">
            Re-Compute Synastry
          </Button>
        }
      >
        <LoveCompatibilityForm />
      </IngressPanel>
      <LoveCompatibilityResults />
      <LoveCompatibilityDataGrids />
    </div>
  );
}
