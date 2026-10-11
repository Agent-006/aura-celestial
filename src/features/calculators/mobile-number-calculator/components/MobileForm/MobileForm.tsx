"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Database, User, Calendar, Phone, ChevronDown } from "lucide-react";
import {
  mobileNumberCalculatorSchema,
  MobileNumberCalculatorFormValues,
} from "../../schemas/mobile-number-calculator.schema";
import styles from "./mobile-form.module.scss";

interface MobileFormProps {
  onSubmit: (data: MobileNumberCalculatorFormValues) => void;
  isLoading: boolean;
}

export const MobileForm: React.FC<MobileFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MobileNumberCalculatorFormValues>({
    resolver: zodResolver(mobileNumberCalculatorSchema),
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerBar}>
        <div className={styles.left}>
          <Database size={12} />
          <span>MOBILE FREQUENCY HARMONIZER / HUB-8</span>
        </div>
        <div className={styles.right}>
          <span>EPOCH: J2000.0</span>
          <span className={styles.cyanText}>READY FOR INGRESS</span>
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
            <label>DATE OF BIRTH (OPTIONAL FOR KARMIC SYNC)</label>
            <div className={styles.inputWrapper}>
              <Calendar size={14} className={styles.icon} />
              <input
                type="date"
                {...register("dateOfBirth")}
                className={styles.withIcon}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>MOBILE NUMBER (10 DIGITS)</label>
            <div className={styles.inputWrapper}>
              <Phone size={14} className={styles.icon} />
              <input
                type="text"
                placeholder="9820157890"
                {...register("mobileNumber")}
                className={styles.withIcon}
              />
            </div>
            {errors.mobileNumber && (
              <span className={styles.error}>
                {errors.mobileNumber.message}
              </span>
            )}
          </div>
        </div>

        <div className={styles.inputsRowBottom}>
          <div className={styles.inputGroup}>
            <label>ALGORITHM SELECTION</label>
            <div className={styles.selectWrapper}>
              <select {...register("algorithmSelection")}>
                <option value="vedic">Vedic (Chaldean/Pythagorean) &gt;</option>
              </select>
              <ChevronDown size={14} className={styles.selectIcon} />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>PRIMARY USAGE INTENT</label>
            <div className={styles.selectWrapper}>
              <select {...register("primaryUsageIntent")}>
                <option value="business">
                  Business / Wealth Generation &gt;
                </option>
                <option value="personal">Personal / Relationships &gt;</option>
                <option value="general">General &gt;</option>
              </select>
              <ChevronDown size={14} className={styles.selectIcon} />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>CURRENT MOBILE CARRIER (OPTIONAL)</label>
            <div className={styles.selectWrapper}>
              <select {...register("currentCarrier")}>
                <option value="jio">Jio (Space/Air Tattva Bias) &gt;</option>
                <option value="airtel">
                  Airtel (Fire/Air Tattva Bias) &gt;
                </option>
                <option value="vi">Vi (Earth/Water Tattva Bias) &gt;</option>
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
              ? "COMPUTING MATRIX..."
              : "CALCULATE MOBILE VIBRATIONAL FREQUENCY & KARMIC RESONANCE"}
          </button>
        </div>
      </form>

      <div className={styles.bottomBar}>
        <div className={styles.left}>
          <Database size={10} className={styles.iconCyan} />
          <span>
            REALTIME PARSING: <span className={styles.cyanText}>ACTIVE</span>
          </span>
        </div>
        <div className={styles.right}>
          <span>
            DATABANK: <span className={styles.cyanText}>CONNECTED</span>
          </span>
          <span>•</span>
          <span>
            FREQUENCY ANALYSIS: <span className={styles.cyanText}>SYNCED</span>
          </span>
        </div>
      </div>
    </div>
  );
};
