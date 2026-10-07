"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, MapPin } from "lucide-react";
import { loShuSchema, LoShuFormValues } from "../../schemas/lo-shu.schema";
import styles from "./lo-shu-form.module.scss";

interface LoShuFormProps {
  onSubmit: (data: LoShuFormValues) => void;
  isLoading: boolean;
}

export const LoShuForm: React.FC<LoShuFormProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoShuFormValues>({
    resolver: zodResolver(loShuSchema),
    defaultValues: {
      gender: "Male",
      algorithm: "Traditional",
      timePrecision: "Exact",
    },
  });

  return (
    <div className={styles.formWrapper}>
      <div className={styles.header}>
        <div className={styles.titleBox}>
          <User size={16} /> NATIVE DOSSIER / BIRTH MATRIX (NATIVE 001)
        </div>
        <div className={styles.titleBox} style={{ color: "#FFD700", fontSize: "10px" }}>
          ADVANCED LO SHU ALGORITHM
        </div>
      </div>

      <form className={styles.formElement} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGrid}>
          {/* Row 1 */}
          <div className={styles.inputGroup}>
            <label>NATIVE DOSSIER / FULL NAME</label>
            <input
              type="text"
              placeholder="e.g. Aarav V. Singhania"
              {...register("fullName")}
            />
            {errors.fullName && <span className={styles.error}>{errors.fullName.message}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>GENDER / POLARITY</label>
            <select {...register("gender")}>
              <option value="Male">Male (Yang)</option>
              <option value="Female">Female (Yin)</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <span className={styles.error}>{errors.gender.message}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>DATE OF BIRTH / DD MM YYYY</label>
            <input
              type="date"
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && <span className={styles.error}>{errors.dateOfBirth.message}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>TIME OF BIRTH / HH:MM</label>
            <input
              type="time"
              {...register("timeOfBirth")}
            />
            {errors.timeOfBirth && <span className={styles.error}>{errors.timeOfBirth.message}</span>}
          </div>

          {/* Row 2 */}
          <div className={styles.inputGroup}>
            <label>PLACE OF BIRTH / COORDINATES GEOSYNC</label>
            <div className={styles.inputWithIcon}>
              <MapPin size={16} className={styles.icon} />
              <input
                type="text"
                placeholder="New Delhi, India (28°36'N, 77°12'E)"
                {...register("placeOfBirth")}
              />
            </div>
            {errors.placeOfBirth && <span className={styles.error}>{errors.placeOfBirth.message}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>LO SHU MATRIX ALGORITHM</label>
            <select {...register("algorithm")}>
              <option value="Traditional">Traditional (Includes Century & Year Digits)</option>
              <option value="Advanced">Advanced (Core Only)</option>
              <option value="Karmic">Karmic Resonance</option>
            </select>
            {errors.algorithm && <span className={styles.error}>{errors.algorithm.message}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label>TIME PRECISION</label>
            <select {...register("timePrecision")}>
              <option value="Exact">Exact (Verified by Native)</option>
              <option value="Approximate">Approximate</option>
            </select>
            {errors.timePrecision && <span className={styles.error}>{errors.timePrecision.message}</span>}
          </div>
        </div>

        <div className={styles.submitWrapper}>
          <button type="submit" disabled={isLoading} className={styles.submitBtn}>
            {isLoading ? "CALCULATING MATRICES..." : "Calculate Sacred Lo Shu Grid & Energy Planes"}
          </button>
        </div>
      </form>
    </div>
  );
};
