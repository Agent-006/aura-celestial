"use client";

import React, { useState } from "react";
import { useIshtaDevataTelemetry } from "../../hooks/useIshtaDevataTelemetry";
import { IshtaDevataForm } from "../IshtaDevataForm/IshtaDevataForm";
import { IshtaDevataFormValues } from "../../schemas/ishta-devata.schema";
import { IshtaDevataTelemetryData } from "../../types/ishta-devata.types";
import { IshtaDevataStats } from "../IshtaDevataStats/IshtaDevataStats";
import { KarakamshaAnalytics } from "../KarakamshaAnalytics/KarakamshaAnalytics";
import { TutelaryDeities } from "../TutelaryDeities/TutelaryDeities";
import { CharaKarakaMatrix } from "../CharaKarakaMatrix/CharaKarakaMatrix";
import { SpiritualSadhana } from "../SpiritualSadhana/SpiritualSadhana";
import { IshtaDevataFooter } from "../IshtaDevataFooter/IshtaDevataFooter";
import styles from "./ishta-devata-calculator.module.scss";

export const IshtaDevataCalculator: React.FC = () => {
  const [telemetryData, setTelemetryData] =
    useState<IshtaDevataTelemetryData | null>(null);

  const { mutate: calculate, isPending: isLoading } = useIshtaDevataTelemetry({
    onSuccess: (data) => {
      setTelemetryData(data);
      setTimeout(() => {
        document
          .getElementById("ishta-results")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
  });

  const handleSubmit = (values: IshtaDevataFormValues) => {
    calculate(values);
  };

  return (
    <div className={styles.calculatorWrapper}>
      <IshtaDevataForm onSubmit={handleSubmit} isLoading={isLoading} />

      {telemetryData && (
        <div id="ishta-results" className={styles.resultsContainer}>
          <IshtaDevataStats stats={telemetryData.stats} />

          <KarakamshaAnalytics
            resonanceScores={telemetryData.resonanceScores}
            totalQuotient={telemetryData.totalResonanceQuotient}
          />

          <TutelaryDeities deities={telemetryData.tutelaryDeities} />

          <CharaKarakaMatrix placements={telemetryData.charaKarakas} />

          <SpiritualSadhana protocols={telemetryData.sadhanaProtocols} />

          <IshtaDevataFooter />
        </div>
      )}
    </div>
  );
};
