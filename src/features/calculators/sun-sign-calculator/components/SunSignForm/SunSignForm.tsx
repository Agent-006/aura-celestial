"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  User,
  ChevronDown,
} from "lucide-react";
import {
  sunSignSchema,
  SunSignFormValues,
} from "../../schemas/sun-sign.schema";
import { SunSignTelemetryData } from "../../types/sun-sign.types";
import styles from "./sun-sign-form.module.scss";

interface SunSignFormProps {
  onCalculate: (data: SunSignFormValues) => void;
  isCalculating: boolean;
  telemetry: SunSignTelemetryData | undefined;
}

export const SunSignForm: React.FC<SunSignFormProps> = ({
  onCalculate,
  isCalculating,
  telemetry,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SunSignFormValues>({
    resolver: zodResolver(sunSignSchema),
    defaultValues: {
      gender: "Male",
    },
  });

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formHeader}>
        <div className={styles.headerLabel}>SECTION 01 // NATAL TELEMETRY</div>
        <div className={styles.headerRight}>
          ACCURACY <span className={styles.accentText}>+99.98%</span>
        </div>
      </div>

      <div className={styles.titleContainer}>
        <Sparkles className={styles.titleIcon} size={24} />
        <h2 className={styles.title}>Find Your Sun Sign</h2>
      </div>
      <p className={styles.subtitle}>
        Enter your birth telemetry to compute exact solar coordinates across
        Western Tropical and Vedic Sidereal coordinate planes.
      </p>

      <form onSubmit={handleSubmit(onCalculate)} className={styles.form}>
        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label>FULL NAME</label>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} size={18} />
              <input
                type="text"
                placeholder="Admin"
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
            <label>MACAQUE / GENDER</label>
            <div className={styles.inputWrapper}>
              <select {...register("gender")}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Unknown">Unknown</option>
              </select>
              <ChevronDown className={styles.selectIcon} size={18} />
            </div>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>DATE OF BIRTH (GREGORIAN EPOCH)</label>
          <div className={styles.inputWrapper}>
            <Calendar className={styles.inputIcon} size={18} />
            <input type="date" {...register("dateOfBirth")} />
          </div>
          {errors.dateOfBirth && (
            <span className={styles.errorText}>
              {errors.dateOfBirth.message}
            </span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label>TIME OF BIRTH (LOCAL STANDARD TIME)</label>
          <div className={styles.inputWrapper}>
            <Clock className={styles.inputIcon} size={18} />
            <input type="time" {...register("timeOfBirth")} />
          </div>
          {errors.timeOfBirth && (
            <span className={styles.errorText}>
              {errors.timeOfBirth.message}
            </span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label>PLACE OF BIRTH (CITY, JURISDICTION)</label>
          <div className={styles.inputWrapper}>
            <MapPin className={styles.inputIcon} size={18} />
            <input
              type="text"
              placeholder="New Delhi, Delhi, India"
              {...register("placeOfBirth")}
            />
          </div>
          <div className={styles.coordinatesHint}>
            GPS LAT: 28° 38&apos; 14&quot; N — LONG: 77° 13&apos; 35&quot; E{" "}
            <span className={styles.accentText}>(GEOLOCATED)</span>
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
          <Sparkles size={18} />
          {isCalculating
            ? "Computing Solar Coordinates..."
            : "Calculate Solar Coordinates"}
        </button>
      </form>

      <div className={styles.telemetryFooter}>
        <div className={styles.footerHeader}>
          <span className={styles.pulseDot}></span>
          REAL-TIME EPHEMERIS (SURYA) TRACKING
        </div>
        <div className={styles.telemetryMetrics}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>SOLAR SPEED</span>
            <span className={styles.metricValue}>
              {telemetry?.solarSpeed || "---"}
            </span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>DECLINATION (J2000)</span>
            <span className={styles.metricValue}>
              {telemetry?.declination || "---"}
            </span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>RIGHT ASCENSION</span>
            <span className={styles.metricValue}>
              {telemetry?.rightAscension || "---"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
