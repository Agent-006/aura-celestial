"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Database, User, MapPin, ChevronDown } from "lucide-react";
import {
  destinyNumberCalculatorSchema,
  DestinyNumberCalculatorFormValues,
} from "../../schemas/destiny-number-calculator.schema";
import styles from "./destiny-form.module.scss";

interface DestinyFormProps {
  onSubmit: (data: DestinyNumberCalculatorFormValues) => void;
  isLoading: boolean;
}

export const DestinyForm: React.FC<DestinyFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DestinyNumberCalculatorFormValues>({
    resolver: zodResolver(destinyNumberCalculatorSchema),
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerBar}>
        <div className={styles.left}>
          <Database size={12} />
          <span>Sacred Nativity Ingress Chassis</span>
          <span className={styles.subtitle}>
            AURA OBSERVATORY CHRONOMETRY MODULE
          </span>
        </div>
        <div className={styles.right}>
          <span className={styles.cyanText}>REALTIME PARSING: ACTIVE</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <div className={styles.inputsRowTop}>
          <div className={styles.inputGroup}>
            <label>SUBJECT DOSSIER / FULL NAME</label>
            <div className={styles.inputWrapper}>
              <User size={14} className={styles.icon} />
              <input
                type="text"
                placeholder="Aarav V. Singhania"
                {...register("fullName")}
                className={styles.withIcon}
              />
            </div>
            {errors.fullName && (
              <span className={styles.error}>{errors.fullName.message}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>BIRTH LOCATION / COORDS</label>
            <div className={styles.inputWrapper}>
              <MapPin size={14} className={styles.icon} />
              <input
                type="text"
                placeholder="New Delhi, India / 28.6139° N"
                {...register("birthLocation")}
                className={styles.withIcon}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>NUMEROLOGY SYSTEM</label>
            <div className={styles.selectWrapper}>
              <select {...register("numerologySystem")}>
                <option value="chaldean">
                  Chaldean / Vedic (Sankhya Standard)
                </option>
              </select>
              <ChevronDown size={14} className={styles.selectIcon} />
            </div>
          </div>
        </div>

        <div className={styles.inputsRowDate}>
          <div className={styles.inputGroup}>
            <label>BIRTH DATE</label>
            <input type="text" placeholder="28" {...register("birthDate")} />
            {errors.birthDate && (
              <span className={styles.error}>{errors.birthDate.message}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>BIRTH MONTH (MM)</label>
            <input type="text" placeholder="11" {...register("birthMonth")} />
            {errors.birthMonth && (
              <span className={styles.error}>{errors.birthMonth.message}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>BIRTH YEAR</label>
            <input type="text" placeholder="1999" {...register("birthYear")} />
            {errors.birthYear && (
              <span className={styles.error}>{errors.birthYear.message}</span>
            )}
          </div>
        </div>

        <div className={styles.inputsRowBottom}>
          <div className={styles.inputGroup}>
            <label>BIRTH TIME (HH:MM) OPTIONAL</label>
            <input type="text" placeholder="14:30" {...register("birthTime")} />
          </div>

          <div className={styles.inputGroup} style={{ flex: 2 }}>
            <label>CALCULATION MODE</label>
            <div className={styles.selectWrapper}>
              <select {...register("calculationMode")}>
                <option value="full">
                  Full Date Aggregation (Day+Month+Year, adding to Root)
                </option>
              </select>
              <ChevronDown size={14} className={styles.selectIcon} />
            </div>
          </div>
        </div>

        <div className={styles.submitSection}>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitBtn}
          >
            {isLoading
              ? "COMPUTING DESTINY MATRIX..."
              : "Calculate Sacred Bhagyank & Cosmic Destiny Vector"}
          </button>
        </div>
      </form>

      <div className={styles.bottomBar}>
        <div className={styles.left}>
          <span>
            DATABANK MATCH:{" "}
            <span className={styles.goldText}>Positive (Level 1)</span>
          </span>
        </div>
        <div className={styles.right}>
          <span>
            SYNCHRONIZING ORBITAL DATA{" "}
            <span className={styles.cyanText}>...</span>
          </span>
        </div>
      </div>
    </div>
  );
};
