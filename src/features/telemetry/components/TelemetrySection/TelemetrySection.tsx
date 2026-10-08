"use client";

import { useState } from "react";
import { TelemetryFormValues } from "../../schemas/telemetry.schema";
import { TelemetryBackground } from "../TelemetryBackground/TelemetryBackground";
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
      <TelemetryBackground />
      <div className={styles.container}>
        <TelemetryContentLeft onSubmit={handleCompute} isLoading={isComputing} />
        <TelemetryContentRight />
      </div>
    </section>
  );
}
