"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Database, User, MapPin, Calendar, Clock, Globe } from "lucide-react";
import {
  ageCalculatorSchema,
  AgeCalculatorFormValues,
} from "../../schemas/age-calculator.schema";
import styles from "./age-form.module.scss";

interface AgeFormProps {
  onSubmit: (data: AgeCalculatorFormValues) => void;
  isLoading: boolean;
}

export const AgeForm: React.FC<AgeFormProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AgeCalculatorFormValues>({
    resolver: zodResolver(ageCalculatorSchema),
    defaultValues: {
      includeVedicChronometry: true,
      includeSynodicSolarReturn: true,
      includeLunarTithi: true,
    },
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerBar}>
        <div className={styles.left}>
          <Database size={12} />
          <span>CHASSIS VTC-7 / TEMPORAL CHRONOMETRY INGRESS V4.2</span>
        </div>
        <div className={styles.right}>
          <span className={styles.activeDot}></span>
          <span>
            D9 NAVAMSHA: REALTIME ORBITAL CONVERGENCE:{" "}
            <span className={styles.cyanText}>SIDEREAL ALIGNMENT SECURED</span>
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <div className={styles.inputsRow}>
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
            <label>PLACE OF BIRTH</label>
            <div className={styles.inputWrapper}>
              <MapPin size={14} className={styles.icon} />
              <input
                type="text"
                placeholder="New Delhi, India"
                {...register("placeOfBirth")}
                className={styles.withIcon}
              />
            </div>
            {errors.placeOfBirth && (
              <span className={styles.error}>
                {errors.placeOfBirth.message}
              </span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>EXACT DATE OF BIRTH</label>
            <div className={styles.inputWrapper}>
              <Calendar size={14} className={styles.icon} />
              <input
                type="text"
                placeholder="14 / 09 / 1988"
                {...register("dateOfBirth")}
                className={styles.withIcon}
              />
            </div>
            {errors.dateOfBirth && (
              <span className={styles.error}>{errors.dateOfBirth.message}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>EXACT TIME OF BIRTH</label>
            <div className={styles.inputWrapper}>
              <Clock size={14} className={styles.icon} />
              <input
                type="text"
                placeholder="18:45 PM (IST)"
                {...register("timeOfBirth")}
                className={styles.withIcon}
              />
            </div>
            {errors.timeOfBirth && (
              <span className={styles.error}>{errors.timeOfBirth.message}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>TIMEZONE COORDINATES</label>
            <div className={styles.inputWrapper}>
              <Globe size={14} className={styles.icon} />
              <input
                type="text"
                placeholder="UTC+05:30 (India Standard Time)"
                {...register("timezone")}
                className={styles.withIcon}
              />
            </div>
          </div>
        </div>

        <div className={styles.middleSection}>
          <div className={styles.toggles}>
            <span className={styles.toggleLabel}>MODULE CALIBRATION:</span>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" {...register("includeVedicChronometry")} />
              Vedic Chronometry (Ghati/Pala)
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                {...register("includeSynodicSolarReturn")}
              />
              Synodic/Sidereal Solar Return
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" {...register("includeLunarTithi")} />
              Lunar Tithi (Moon Phase) Chronology
            </label>
          </div>

          <div className={styles.targetInfo}>
            <div className={styles.label}>TARGET:</div>
            <div className={styles.value}>
              CURRENT TEMPORAL DATE: {new Date().toISOString().split("T")[0]}{" "}
              (LIVE)
              <br />
              EPHEMERIS: LAHIRI (CHITRAPAKSHA)
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
              ? "COMPUTING TEMPORAL INGRESS..."
              : "RECALCULATE VEDIC CHRONOMETRY & SOLAR RETURN CYCLES (V. 4.2)"}
            <span className={styles.badgeHighlight}>SYNC</span>
          </button>
        </div>
      </form>

      <div className={styles.bottomBar}>
        <div className={styles.left}>
          CHRONOMETRIC PROTOCOL:{" "}
          <span className={styles.cyanText}>
            VIMSHOTTARI / VARSHPHAL ACTIVE
          </span>{" "}
          | API:{" "}
          <span className={styles.cyanText}>HELIOCENTRIC & GEOCENTRIC</span>
        </div>
        <div className={styles.right}>
          <span>
            NEXT VARSHPHAL INGRESS:{" "}
            <span className={styles.cyanText}>
              14 MAY 2027 (EST. 13:42:01 UTC)
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
