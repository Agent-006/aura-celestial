"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles, MapPin, User, ChevronDown, Moon } from "lucide-react";
import { rashiSchema, RashiFormValues } from "../../schemas/rashi.schema";
import styles from "./rashi-form.module.scss";

interface RashiFormProps {
  onCalculate: (data: RashiFormValues) => void;
  isCalculating: boolean;
}

export const RashiForm: React.FC<RashiFormProps> = ({
  onCalculate,
  isCalculating,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RashiFormValues>({
    resolver: zodResolver(rashiSchema),
    defaultValues: {
      gender: "Male",
      calculateSidereal: true,
      dstCorrection: false,
    },
  });

  return (
    <div className={styles.formWrapper}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Moon className={styles.icon} size={24} />
          <h3>A Natal Coordinates Input</h3>
        </div>
        <button
          className={styles.resetBtn}
          onClick={() => reset()}
          type="button"
        >
          RESET CALCULATION PARAMETERS
        </button>
      </div>

      <form onSubmit={handleSubmit(onCalculate)} className={styles.form}>
        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label>FULL NAME OR ENTITY</label>
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
            <label>POLARITY / GENDER</label>
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
            <label>DATE OF BIRTH (GREGORIAN EPOCH)</label>
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
            <label>EXACT TIME (LOCAL STANDARD)</label>
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

        <div className={styles.optionsGroup}>
          <label className={styles.optionItem}>
            <input type="checkbox" {...register("calculateSidereal")} />
            <div className={styles.optionText}>
              <span className={styles.optionLabel}>
                Calculate Sidereal Ayanamsha (Default)
              </span>
              <span className={styles.optionDesc}>
                Shifts by ~24° (Lahiri) for true astronomical placement. Disable
                to compute Tropical (Western) placement instead.
              </span>
            </div>
          </label>
          <label className={styles.optionItem}>
            <input type="checkbox" {...register("dstCorrection")} />
            <div className={styles.optionText}>
              <span className={styles.optionLabel}>DST Correction</span>
              <span className={styles.optionDesc}>
                Applies Daylight Saving Time automated corrections for your
                jurisdiction.
              </span>
            </div>
          </label>
        </div>

        <div className={styles.inputGroup}>
          <label>MILITARY / GEOPOLITICAL JURISDICTION</label>
          <div className={styles.inputWrapper}>
            <MapPin className={styles.inputIcon} size={16} />
            <input
              type="text"
              placeholder="Mumbai, Maharashtra, India"
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

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={isCalculating}
        >
          <Sparkles size={16} />
          {isCalculating
            ? "Calculating Coordinates..."
            : "Calculate Chandra Rashi Coordinates & Nakshatra"}
        </button>

        <div className={styles.footerMetrics}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>EPHEMERIS STANDARD</span>
            <span className={styles.metricValue}>NASA JPL DE431</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>AYANAMSHA VARIANT</span>
            <span className={styles.metricValue}>CHITRA PAKSHA (LAHIRI)</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>HOUSE SYSTEM</span>
            <span className={styles.metricValue}>SRIPATHI BHAVA CHAKRA</span>
          </div>
        </div>
      </form>
    </div>
  );
};
