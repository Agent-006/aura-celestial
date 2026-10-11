"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Fingerprint } from "lucide-react";
import { NumerologyFormValues } from "../../types/numerology.types";
import { numerologyFormSchema } from "../../schemas/numerology.schema";
import styles from "./numerology-form.module.scss";

interface NumerologyFormProps {
  onCalculate: (data: NumerologyFormValues) => void;
  isLoading: boolean;
}

export const NumerologyForm: React.FC<NumerologyFormProps> = ({
  onCalculate,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NumerologyFormValues>({
    resolver: zodResolver(numerologyFormSchema),
    defaultValues: {
      fullName: "",
      system: "Chaldean",
      dateOfBirth: null as any,
    },
  });

  return (
    <div className={styles.formCard}>
      <div className={styles.cardHeader}>
        <div className={styles.headerTitle}>
          <Fingerprint className={styles.headerIcon} size={24} />
          <h2>Vibrational Vector Ingress</h2>
        </div>
        <p className={styles.headerSubtitle}>
          Enter your natal parameters to synthesize your energetic blueprint.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onCalculate)}>
        <div className={styles.inputGroup}>
          <label>Full Birth Name (English Only) *</label>
          <input
            type="text"
            placeholder="e.g. Aarvin Chatterjee"
            {...register("fullName")}
            className={errors.fullName ? styles.inputError : ""}
          />
          {errors.fullName && (
            <span className={styles.errorText}>{errors.fullName.message}</span>
          )}
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Numerology System</label>
            <select
              {...register("system")}
              className={errors.system ? styles.inputError : ""}
            >
              <option value="Chaldean">Cheiro / Chaldean</option>
              <option value="Pythagorean">Pythagorean</option>
              <option value="Sepharial">Sepharial</option>
              <option value="Modern">Modern</option>
            </select>
            {errors.system && (
              <span className={styles.errorText}>{errors.system.message}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Birth Date *</label>
            <input
              type="date"
              {...register("dateOfBirth", { valueAsDate: true })}
              className={errors.dateOfBirth ? styles.inputError : ""}
            />
            {errors.dateOfBirth && (
              <span className={styles.errorText}>
                {errors.dateOfBirth.message}
              </span>
            )}
          </div>
        </div>

        <button type="submit" disabled={isLoading} className={styles.submitBtn}>
          <Lock size={18} className={styles.btnIcon} />
          {isLoading
            ? "Synthesizing Matrix..."
            : "Synthesize Sacred Vibrational Matrix"}
        </button>
      </form>
    </div>
  );
};
