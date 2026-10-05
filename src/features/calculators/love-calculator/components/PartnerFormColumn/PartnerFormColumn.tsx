import React from "react";
import { UseFormRegister } from "react-hook-form";
import { LoveCompatibilityValues } from "../../schemas/love-compatibility.schema";
import styles from "./partner-form-column.module.scss";

interface PartnerFormColumnProps {
  label: string;
  register: UseFormRegister<LoveCompatibilityValues>;
  prefix: "partnerA" | "partnerB";
  badgeText: string;
}

export function PartnerFormColumn({
  label,
  register,
  prefix,
  badgeText,
}: PartnerFormColumnProps) {
  return (
    <div className={styles.partnerColumn}>
      <div className={styles.columnHeader}>
        <div className={styles.partnerLabel}>
          <span className={styles.avatar}>
            {prefix === "partnerA" ? "A" : "B"}
          </span>
          <h3>{label}</h3>
        </div>
        <div className={styles.statusBadge}>{badgeText}</div>
      </div>
      <div className={styles.inputGrid}>
        <div className={styles.inputGroup}>
          <label>FULL LEGAL NAME</label>
          <input
            type="text"
            placeholder="E.g., Aarav V. Singhania"
            {...register(`${prefix}.name`)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>DATE OF BIRTH</label>
          <input type="date" {...register(`${prefix}.dob`)} />
        </div>
        <div className={styles.inputGroup}>
          <label>EXACT SIDEREAL TIME</label>
          <input type="time" {...register(`${prefix}.time`)} />
        </div>
        <div className={styles.inputGroup}>
          <label>GEODETIC COORDINATES</label>
          <input
            type="text"
            placeholder="Mumbai, MH [18.922° N, 72.834° E]"
            {...register(`${prefix}.location`)}
          />
        </div>
      </div>
      {/* Mocked Data Points to match the design */}
      <div className={styles.dataPointsRow}>
        <div className={styles.dataPoint}>
          <span className={styles.dataLabel}>MOON RASI</span>
          <span className={styles.dataValue}>Vrischika (Scorpio)</span>
        </div>
        <div className={styles.dataPoint}>
          <span className={styles.dataLabel}>NAKSHATRA</span>
          <span className={styles.dataValue}>Anuradha Pada 3</span>
        </div>
        <div className={styles.dataPoint}>
          <span className={styles.dataLabel}>JANMA NADI</span>
          <span className={styles.dataValue}>Antya (End)</span>
        </div>
        <div className={styles.dataPoint}>
          <span className={styles.dataLabel}>SHUKRA (VENUS)</span>
          <span className={styles.dataValue}>Libra 14°20&apos;</span>
        </div>
      </div>
    </div>
  );
}
