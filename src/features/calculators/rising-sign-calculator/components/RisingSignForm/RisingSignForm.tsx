"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Sparkles,
  MapPin,
  User,
  ChevronDown,
  Compass,
  Info,
} from "lucide-react";
import {
  risingSignSchema,
  RisingSignFormValues,
} from "../../schemas/rising-sign.schema";
import styles from "./rising-sign-form.module.scss";

interface RisingSignFormProps {
  onCalculate: (data: RisingSignFormValues) => void;
  isCalculating: boolean;
}

export const RisingSignForm: React.FC<RisingSignFormProps> = ({
  onCalculate,
  isCalculating,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RisingSignFormValues>({
    resolver: zodResolver(risingSignSchema),
    defaultValues: {
      gender: "Male",
      isTimeUnknown: false,
    },
  });

  const isTimeUnknown = watch("isTimeUnknown");

  return (
    <div className={styles.formWrapper}>
      <div className={styles.header}>
        <Compass className={styles.icon} size={24} />
        <h3>Calculate Your Rising Sign (Lagna)</h3>
      </div>
      <p className={styles.subtitle}>
        Enter exact birth metrics to resolve your eastern ascendant degree,
        Lagna lord & Navamsha, and compute the Bhavachakra cusps.
      </p>

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
            <div className={styles.timeHeader}>
              <label>EXACT TIME (LOCAL STANDARD)</label>
              <label className={styles.unknownToggle}>
                <input type="checkbox" {...register("isTimeUnknown")} />
                UNKNOWN EXACT TIME
              </label>
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="time"
                disabled={isTimeUnknown}
                {...register("timeOfBirth")}
              />
            </div>
            {errors.timeOfBirth && !isTimeUnknown && (
              <span className={styles.errorText}>
                {errors.timeOfBirth.message}
              </span>
            )}
          </div>
        </div>

        {isTimeUnknown && (
          <div className={styles.infoHint}>
            <Info className={styles.hintIcon} size={18} />
            <p>
              Ascendant (Lagna) changes roughly every 2 hours. If exact time is
              unknown, we will generate a Sunrise (Surya Lagna) or Moon (Chandra
              Lagna) chart, but houses will be inaccurate.
            </p>
          </div>
        )}

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
            : "Calculate Rising Sign Coordinates"}
        </button>
      </form>
    </div>
  );
};
