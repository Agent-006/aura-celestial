"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calculator } from "lucide-react";
import { flamesFormSchema, FlamesFormValues } from "../../schemas/flames.schema";
import { FlamesTelemetryData } from "../../types/flames.types";
import styles from "./flames-form.module.scss";

interface FlamesFormProps {
  onSubmit: (values: FlamesFormValues) => void;
  isLoading: boolean;
  data: FlamesTelemetryData | null;
}

export const FlamesForm: React.FC<FlamesFormProps> = ({
  onSubmit,
  isLoading,
  data,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlamesFormValues>({
    resolver: zodResolver(flamesFormSchema),
    defaultValues: {
      entityA: "Aarav V. Singhania",
      entityAGender: "Masculine/Purusha",
      entityB: "Aanya S. Roy",
      entityBGender: "Feminine/Prakriti",
      linguisticProtocol: "Vedic Akshara Phonetics",
      crossCulturalVariants: false,
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span className={styles.indicatorGold}></span>
          PHASE 01: DUAL ENTITY ENGRAM
        </div>
        <div className={styles.step}>TARGET MATCH DETECTED</div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>ADVERSARY SUBJECT (ENTITY A)</label>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Enter subject A name"
              {...register("entityA")}
            />
            <select {...register("entityAGender")}>
              <option value="Masculine/Purusha">Masculine/Purusha</option>
              <option value="Feminine/Prakriti">Feminine/Prakriti</option>
            </select>
          </div>
          {errors.entityA && (
            <span className={styles.error}>{errors.entityA.message}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label>RESONANCE TARGET (ENTITY B)</label>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Enter subject B name"
              {...register("entityB")}
            />
            <select {...register("entityBGender")}>
              <option value="Masculine/Purusha">Masculine/Purusha</option>
              <option value="Feminine/Prakriti">Feminine/Prakriti</option>
            </select>
          </div>
          {errors.entityB && (
            <span className={styles.error}>{errors.entityB.message}</span>
          )}
        </div>

        <div className={styles.protocolSection}>
          <span className={styles.protocolLabel}>LINGUISTIC HARMONIZATION PROTOCOL</span>
          <div className={styles.radioGroup}>
            <label className={styles.radioItem}>
              <input
                type="radio"
                value="Vedic Akshara Phonetics"
                {...register("linguisticProtocol")}
              />
              <span className={styles.radioLabel}>Vedic Akshara Phonetics</span>
              <span className={styles.radioDesc}>Sanskrit Swara / Vyanjana</span>
            </label>
            <label className={styles.radioItem}>
              <input
                type="radio"
                value="Orthographic Rubrics"
                {...register("linguisticProtocol")}
              />
              <span className={styles.radioLabel}>Orthographic Rubrics</span>
              <span className={styles.radioDesc}>Standard English Letter Cancellation</span>
            </label>
          </div>
        </div>

        <div className={styles.toggles}>
          <label className={styles.toggleItem}>
            <input type="checkbox" {...register("crossCulturalVariants")} />
            <span>CROSS-CULTURAL NAME VARIANTS (BETA)</span>
          </label>
          <label className={styles.toggleItem}>
            <input type="checkbox" disabled checked />
            <span className={styles.shieldText}>ENABLE HARMONIC SHIELD</span>
          </label>
        </div>

        <button type="submit" disabled={isLoading} className={styles.submitBtn}>
          <Calculator size={18} />
          {isLoading ? "CALCULATING MATRICES..." : "CALCULATE FLAMES ASTRAL MATRIX & AFFINITY"}
        </button>
      </form>

      {data && (
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.label}>TOTAL AKSHARAS</span>
            <span className={styles.value}>{data.totalAksharas} CHARACTERS</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.label}>REMAINING NODES</span>
            <span className={`${styles.value} ${styles.highlight}`}>REMAINING = {data.remainingNodes}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.label}>FILTER RATE</span>
            <span className={styles.value}>ELIMIN. = {data.filterRate}</span>
          </div>
        </div>
      )}
    </div>
  );
};
