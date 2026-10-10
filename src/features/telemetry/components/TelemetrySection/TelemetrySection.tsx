"use client";

import { useState } from "react";
import { TelemetryFormValues } from "../../schemas/telemetry.schema";
import { StarfieldCanvas } from "@/components/ui/StarfieldCanvas/StarfieldCanvas";
import { SectionSeparator } from "@/components/ui/SectionSeparator/SectionSeparator";
import { TelemetryContentLeft } from "../TelemetryContentLeft/TelemetryContentLeft";
import { TelemetryContentRight } from "../TelemetryContentRight/TelemetryContentRight";
import styles from "./telemetry-section.module.scss";

export function TelemetrySection() {
  const [isComputing, setIsComputing] = useState(false);

  const handleCompute = async (data: TelemetryFormValues) => {
    setIsComputing(true);
    // Simulate API delay to show the loading state
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Telemetry computed with data:", data);
    setIsComputing(false);
  };

  return (
    <section className={styles.section}>
      {/* Background Elements */}
      <div className={styles.topSeparator}><SectionSeparator position="top" /></div>
      <StarfieldCanvas className={styles.starfield} count={400} />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.bottomSeparator}><SectionSeparator position="bottom" /></div>

      <div className={styles.container}>
        <div className={styles.card}>
          <TelemetryContentLeft onSubmit={handleCompute} isLoading={isComputing} />
          <TelemetryContentRight />
        </div>
      </div>
    </section>
  );
}
