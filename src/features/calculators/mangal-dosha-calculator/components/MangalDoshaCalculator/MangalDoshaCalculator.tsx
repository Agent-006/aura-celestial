"use client";

import React, { useState } from "react";
import { Download, MessageSquare, FileText } from "lucide-react";
import { MangalDoshaFormValues } from "../../schemas/mangal-dosha.schema";
import { useMangalDoshaTelemetry } from "../../hooks/useMangalDoshaTelemetry";
import { MangalDoshaForm } from "../MangalDoshaForm/MangalDoshaForm";
import { MangalTelemetryRadar } from "../MangalTelemetryRadar/MangalTelemetryRadar";
import { TricameralDiagnosticMatrix } from "../TricameralDiagnosticMatrix/TricameralDiagnosticMatrix";
import { ParashariCancellations } from "../ParashariCancellations/ParashariCancellations";
import { MartianRemedies } from "../MartianRemedies/MartianRemedies";
import styles from "./mangal-dosha-calculator.module.scss";

export const MangalDoshaCalculator: React.FC = () => {
  const [formData, setFormData] = useState<MangalDoshaFormValues | null>(null);

  const { data, isLoading } = useMangalDoshaTelemetry(formData, {
    onSuccess: () => {
      // scroll down logic if needed
    },
  });

  const handleSubmit = (values: MangalDoshaFormValues) => {
    setFormData(values);
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.topSection}>
        <div className={styles.formArea}>
          <MangalDoshaForm onSubmit={handleSubmit} isLoading={isLoading} />
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.spinner} />
              <span className={styles.loadingText}>
                Analyzing Martian Geometry...
              </span>
            </div>
          )}
        </div>
        
        <div className={styles.radarArea}>
          {data ? (
            <MangalTelemetryRadar data={data} />
          ) : (
            <div
              style={{
                height: "100%",
                background: "rgba(10, 15, 30, 0.5)",
                border: "1px dashed rgba(255, 215, 0, 0.2)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.3)",
                fontFamily: "monospace",
                padding: "20px",
                textAlign: "center"
              }}
            >
              Awaiting subject telemetry for Kuja Dosha processing...
            </div>
          )}
        </div>
      </div>

      {data && (
        <>
          <TricameralDiagnosticMatrix data={data} />
          <ParashariCancellations data={data} />
          <MartianRemedies data={data} />

          <div className={styles.dossierSection}>
            <div className={styles.dossierInfo}>
              <div className={styles.iconWrapper}>
                <FileText size={24} />
              </div>
              <div className={styles.text}>
                <h4>Diagnostic Dossier Complete</h4>
                <p>Auto-Ephemeris Framework (Astro-Kuja-Radar v2.4)</p>
              </div>
            </div>
            
            <div className={styles.dossierActions}>
              <button className={styles.btnOutline}>
                <Download size={16} /> Export Full Mangal Dosha Dossier PDF
              </button>
              <button className={styles.btnPrimary}>
                <MessageSquare size={16} /> Consult Mangal Dosha Master
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
