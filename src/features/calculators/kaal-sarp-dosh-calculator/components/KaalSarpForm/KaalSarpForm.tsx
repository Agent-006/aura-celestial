"use client";

import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, MapPin } from "lucide-react";
import {
  kaalSarpSchema,
  KaalSarpFormValues,
} from "../../schemas/kaal-sarp.schema";
import styles from "./kaal-sarp-form.module.scss";

interface KaalSarpFormProps {
  onSubmit: (values: KaalSarpFormValues) => void;
  isLoading: boolean;
}

export const KaalSarpForm: React.FC<KaalSarpFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<KaalSarpFormValues>({
    resolver: zodResolver(kaalSarpSchema),
    defaultValues: {
      fullName: "Aarav V. Singhania",
      dateOfBirth: "14-09-1988",
      timeOfBirth: "18:45",
      placeOfBirth: "New Delhi, India",
      orbitalAxis: "Lahiri Chitra Paksha (23°15'00\")",
      houseSystem: "Placidus",
      astrometricEngine: "TOPOCENTRIC",
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleBox}>
          <User size={16} /> NATIVE DOSSIER / FULL BIRTH DETAILS (NATIVE 001)
        </div>
        <div
          className={styles.titleBox}
          style={{ color: "#FFD700", fontSize: "10px" }}
        >
          ASTROMETRIC CALCULATION ENGINE : TOPOCENTRIC
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGrid}>
          {/* Col 1 */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div className={styles.inputGroup}>
              <label>NATIVE DOSSIER / FULL NAME</label>
              <input
                type="text"
                placeholder="e.g. Aarav V. Singhania"
                {...register("fullName")}
              />
              {errors.fullName && (
                <span className={styles.error}>{errors.fullName.message}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label>PLACE OF BIRTH / COORDINATES GEOSYNC</label>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="New Delhi, India"
                  {...register("placeOfBirth")}
                  style={{ paddingLeft: "32px" }}
                />
                <MapPin
                  size={16}
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "10px",
                    color: "#48e5c2",
                  }}
                />
              </div>
              {errors.placeOfBirth && (
                <span className={styles.error}>
                  {errors.placeOfBirth.message}
                </span>
              )}
            </div>
          </div>

          {/* Col 2 */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>DATE OF BIRTH / DD-MM-YYYY</label>
                <input
                  type="text"
                  placeholder="14th September 1988"
                  {...register("dateOfBirth")}
                />
                {errors.dateOfBirth && (
                  <span className={styles.error}>
                    {errors.dateOfBirth.message}
                  </span>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label>TIME OF BIRTH / EXACT HH:MM</label>
                <input
                  type="text"
                  placeholder="18:45 (6:45 PM)"
                  {...register("timeOfBirth")}
                />
                {errors.timeOfBirth && (
                  <span className={styles.error}>
                    {errors.timeOfBirth.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>ORBITAL AXIS / ZODIACAL MATRIX</label>
                <select {...register("orbitalAxis")}>
                  <option value={"Lahiri Chitra Paksha (23°15'00\")"}>
                    Lahiri Chitra Paksha (23°15&apos;00&quot;)
                  </option>
                  <option value="Raman">Raman</option>
                  <option value="Tropical">Tropical</option>
                </select>
                {errors.orbitalAxis && (
                  <span className={styles.error}>
                    {errors.orbitalAxis.message}
                  </span>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label>EXACT HOUSE SYSTEM</label>
                <select {...register("houseSystem")}>
                  <option value="Placidus">Placidus</option>
                  <option value="Whole Sign">Whole Sign</option>
                  <option value="Koch">Koch</option>
                </select>
                {errors.houseSystem && (
                  <span className={styles.error}>
                    {errors.houseSystem.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.submitWrapper}>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitBtn}
          >
            {isLoading
              ? "CALCULATING MATRICES..."
              : "Execute Sub-Arcsecond Kaal Sarp Dosha Diagnostic"}
          </button>
        </div>
      </form>
    </div>
  );
};
