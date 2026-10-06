"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles, MapPin, User, ChevronDown, Moon, Info } from "lucide-react";
import { dashaSchema, DashaFormValues } from "../../schemas/dasha.schema";
import styles from "./dasha-form.module.scss";

interface DashaFormProps {
  onCalculate: (data: DashaFormValues) => void;
  isCalculating: boolean;
}

export const DashaForm: React.FC<DashaFormProps> = ({
  onCalculate,
  isCalculating,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DashaFormValues>({
    resolver: zodResolver(dashaSchema),
    defaultValues: {
      gender: "Male",
      verifyEphemeris: false,
    },
  });

  return (
    <div className={styles.formWrapper}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Moon className={styles.icon} size={24} />
          <h3>Chandra (Moon) Natal Coordination & Nakshatra Locator</h3>
        </div>
        <button
          className={styles.resetBtn}
          onClick={() => reset()}
          type="button"
        >
          RESET PARAMS
        </button>
      </div>

      <form onSubmit={handleSubmit(onCalculate)} className={styles.form}>
        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label>NATIVE IDENTIFIER / FULL NAME</label>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} size={16} />
              <input
                type="text"
                placeholder="Aura Celestial"
                className={styles.withIcon}
                {...register("fullName")}
              />
            </div>
            {errors.fullName && (
              <span className={styles.errorText}>
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>GENDER / POLARITY</label>
            <div className={styles.inputWrapper}>
              <select {...register("gender")}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Unknown">Unknown</option>
              </select>
              <ChevronDown className={styles.selectIcon} size={16} />
            </div>
          </div>
        </div>

        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label>DATE OF NATIVITY (GREGORIAN EPOCH)</label>
            <div className={styles.inputWrapper}>
              <input type="date" {...register("dateOfBirth")} />
            </div>
            {errors.dateOfBirth && (
              <span className={styles.errorText}>
                {errors.dateOfBirth.message}
              </span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>PRECISE TIME OF BIRTH (LOCAL STANDARD TIME)</label>
            <div className={styles.inputWrapper}>
              <input type="time" {...register("timeOfBirth")} />
            </div>
            {errors.timeOfBirth && (
              <span className={styles.errorText}>
                {errors.timeOfBirth.message}
              </span>
            )}
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>PLACE OF BIRTH (GEOGRAPHIC LOCUS)</label>
          <div className={styles.inputWrapper}>
            <MapPin className={styles.inputIcon} size={16} />
            <input
              type="text"
              placeholder="New Delhi, Delhi, India"
              className={styles.withIcon}
              {...register("placeOfBirth")}
            />
          </div>
          {errors.placeOfBirth && (
            <span className={styles.errorText}>
              {errors.placeOfBirth.message}
            </span>
          )}
        </div>

        <div className={styles.infoNote}>
          <div className={styles.noteTitle}>
            <Info size={16} />
            CRITICAL ASTROMETRIC NOTE
          </div>
          <p>
            Vimshottari Dasha calculations (timelines) are derived entirely from
            the exact degree of the Natal Moon&apos;s Nakshatra position. An
            accurate time of birth is particularly crucial for Dasha.
          </p>
        </div>

        <div className={styles.optionsGroup}>
          <label className={styles.optionItem}>
            <input type="checkbox" {...register("verifyEphemeris")} />
            <span className={styles.optionLabel}>
              Verify Ephemeris Data (Master Data) / System Ephemeris
              Optimization
            </span>
          </label>
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={isCalculating}
        >
          <Sparkles size={16} />
          {isCalculating
            ? "Calculating Timeline..."
            : "Calculate 120-Year Vimshottari Timeline"}
        </button>

        <div className={styles.footerMetrics}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>DASHA CHAKRA EPHEMERIS</span>
            <span className={styles.metricValue}>
              Dhanu 14° 28&apos; 22&quot;
            </span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>NATAL MOON LONGITUDE</span>
            <span className={styles.metricValue}>
              223° 42&apos; 10&quot; Scorpio
            </span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>CHANDRA NAKSHATRA</span>
            <span className={styles.metricValue}>Anuradha, Pada: 3</span>
          </div>
        </div>
      </form>
    </div>
  );
};
