"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Calendar, MapPin, Database } from "lucide-react";
import {
  ishtaDevataSchema,
  IshtaDevataFormValues,
} from "../../schemas/ishta-devata.schema";
import styles from "./ishta-devata-form.module.scss";

interface IshtaDevataFormProps {
  onSubmit: (data: IshtaDevataFormValues) => void;
  isLoading: boolean;
}

export const IshtaDevataForm: React.FC<IshtaDevataFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IshtaDevataFormValues>({
    resolver: zodResolver(ishtaDevataSchema),
    defaultValues: {
      ayanamsa: "Lahiri",
      nodeCalculation: "True Node",
      charaKarakaScheme: "8 Planets (incl. Rahu)",
    },
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerBar}>
        <div className={styles.left}>
          <span className={styles.activeDot}></span>
          <span>NATIVE 001 : JIVA LINEAGE SYNC V2.1</span>
        </div>
        <div className={styles.right}>
          <span>SIDEREAL ISO-3901-7</span>
          <span>ATMAKARAKA ENGINE ONLINE</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleWithIcon}>
            <Database size={16} /> Sidereal Ephemeris Coordinates & Karaka
            Settings
          </div>
          <span className={styles.badge}>DATA INPUT</span>
        </div>

        <div className={styles.inputsGrid}>
          {/* Row 1 */}
          <div className={styles.inputGroup}>
            <label>NATIVE DOSSIER / FULL NAME</label>
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
            <label>DATE OF BIRTH / DD MM YYYY</label>
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
            <label>TIME OF BIRTH / HH:MM</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="18:45"
                {...register("timeOfBirth")}
              />
              <span className={styles.iconRight}>@</span>
            </div>
            {errors.timeOfBirth && (
              <span className={styles.error}>{errors.timeOfBirth.message}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>PLACE OF BIRTH / GEOSYNC</label>
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

          {/* Row 2 */}
          <div className={styles.inputGroup}>
            <label>ATMAKARAKA (AK) OVERRIDE</label>
            <div className={styles.selectWrapper}>
              <select {...register("akOverride")}>
                <option value="">Auto-Detect via Degrees</option>
                <option value="Sun">Sun</option>
                <option value="Moon">Moon</option>
                <option value="Mars">Mars</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>AYANAMSA ALGORITHM</label>
            <div className={styles.selectWrapper}>
              <select {...register("ayanamsa")}>
                <option value="Lahiri">Lahiri (Chitra Paksha)</option>
                <option value="Raman">Raman</option>
                <option value="KP">KP</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>NODE CALCULATION (RAHU / KETU)</label>
            <div className={styles.selectWrapper}>
              <select {...register("nodeCalculation")}>
                <option value="True Node">True Lunar Node</option>
                <option value="Mean Node">Mean Lunar Node</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>CHARA KARAKA SCHEME</label>
            <div className={styles.selectWrapper}>
              <select {...register("charaKarakaScheme")}>
                <option value="8 Planets (incl. Rahu)">
                  8 Planets (incl. Rahu)
                </option>
                <option value="7 Planets (Standard)">
                  7 Planets (Standard)
                </option>
              </select>
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
              ? "CALCULATING KARAKAS..."
              : "Calculate Ishta Devata & Jaimini Sutra Metrics"}
            <span className={styles.badgeHighlight}>COMPUTE</span>
          </button>
        </div>
      </form>

      <div className={styles.bottomBar}>
        <div className={styles.left}>REAL-TIME EPHEMERIS SYNC: TRUE</div>
        <div className={styles.right}>
          <span>
            ORBITAL DEVIATION: <span className={styles.cyan}>±0.0001 DEG</span>
          </span>
          <span>
            D9 NAVAMSHA: <span className={styles.cyan}>LOCKED</span>
          </span>
          <span>
            ISO DATA: <span className={styles.cyan}>FETCHING</span>
          </span>
        </div>
      </div>
    </div>
  );
};
