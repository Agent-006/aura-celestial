import { TelemetryForm } from "../TelemetryForm/TelemetryForm";
import { TelemetryFormValues } from "../../schemas/telemetry.schema";
import styles from "./telemetry-content-left.module.scss";

interface TelemetryContentLeftProps {
  onSubmit: (data: TelemetryFormValues) => void;
  isLoading: boolean;
}

export function TelemetryContentLeft({ onSubmit, isLoading }: TelemetryContentLeftProps) {
  return (
    <div className={styles.leftColumn}>
      <div className={styles.textContent}>
        <span className={styles.eyebrow}>
          — AUTOMATED TELEMETRY COMPUTATION
        </span>
        <h2 className={styles.title}>Astrology, Personalized Around You</h2>
        <p className={styles.description}>
          Enter your coordinate points. Aura executes NASA JPL algorithms to
          render your sidereal Vedic Lagna (D1) chart with live Mahadasha
          timers.
        </p>
      </div>

      <TelemetryForm onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
}
