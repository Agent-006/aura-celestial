import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Calendar, Type } from "lucide-react";
import {
  nameCompatibilitySchema,
  NameCompatibilityFormValues,
} from "../../schemas/name-compatibility.schema";
import styles from "./name-compatibility-form.module.scss";

interface NameCompatibilityFormProps {
  onSubmit: (data: NameCompatibilityFormValues) => void;
  isLoading: boolean;
}

export const NameCompatibilityForm: React.FC<NameCompatibilityFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NameCompatibilityFormValues>({
    resolver: zodResolver(nameCompatibilitySchema),
    defaultValues: {
      numerologyModel: "Chaldean",
    },
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerBar}>
        <div className={styles.left}>
          <span className={styles.activeDot}></span>
          <span>ONBMASTIC & PHONETIC VIBRATIONAL DOSSIER SYNC</span>
        </div>
        <div className={styles.right}>
          <span>
            RESONANCE MATRIX: <span className={styles.goldText}>READY</span>
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <div className={styles.personsGrid}>
          {/* Person A Section */}
          <div className={styles.personSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.titleWithIcon}>
                <User size={16} /> PERSON A / FIRST SUBJECT
              </div>
            </div>

            <div className={styles.inputsGrid}>
              <div className={styles.inputGroup}>
                <label>FULL NAME (FIRST MIDDLE LAST)</label>
                <div className={styles.inputWrapper}>
                  <Type size={14} className={styles.icon} />
                  <input
                    type="text"
                    placeholder="Aarav V. Singhania"
                    {...register("personA.fullName")}
                    className={styles.withIcon}
                  />
                </div>
                {errors.personA?.fullName && (
                  <span className={styles.error}>
                    {errors.personA.fullName.message}
                  </span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>CURRENT NAME / ALIAS (OPTIONAL)</label>
                <div className={styles.inputWrapper}>
                  <Type size={14} className={styles.icon} />
                  <input
                    type="text"
                    placeholder="Aarav"
                    {...register("personA.alias")}
                    className={styles.withIcon}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>DATE OF BIRTH / DD MM YYYY (OPTIONAL)</label>
                <div className={styles.inputWrapper}>
                  <Calendar size={14} className={styles.icon} />
                  <input
                    type="text"
                    placeholder="14 / 09 / 1988"
                    {...register("personA.dob")}
                    className={styles.withIcon}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Person B Section */}
          <div className={styles.personSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.titleWithIcon}>
                <User size={16} /> PERSON B / SECOND SUBJECT
              </div>
            </div>

            <div className={styles.inputsGrid}>
              <div className={styles.inputGroup}>
                <label>FULL NAME (FIRST MIDDLE LAST)</label>
                <div className={styles.inputWrapper}>
                  <Type size={14} className={styles.icon} />
                  <input
                    type="text"
                    placeholder="Mira K. Sharma"
                    {...register("personB.fullName")}
                    className={styles.withIcon}
                  />
                </div>
                {errors.personB?.fullName && (
                  <span className={styles.error}>
                    {errors.personB.fullName.message}
                  </span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>CURRENT NAME / ALIAS (OPTIONAL)</label>
                <div className={styles.inputWrapper}>
                  <Type size={14} className={styles.icon} />
                  <input
                    type="text"
                    placeholder="Mira"
                    {...register("personB.alias")}
                    className={styles.withIcon}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>DATE OF BIRTH / DD MM YYYY (OPTIONAL)</label>
                <div className={styles.inputWrapper}>
                  <Calendar size={14} className={styles.icon} />
                  <input
                    type="text"
                    placeholder="22 / 11 / 1990"
                    {...register("personB.dob")}
                    className={styles.withIcon}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.settingsRow}>
          <div className={styles.inputGroup}>
            <label>CORE NUMEROLOGY MODEL / PHONETIC DECODING ALGORITHM</label>
            <div className={styles.selectWrapper}>
              <select {...register("numerologyModel")}>
                <option value="Chaldean">Chaldean / Vedic (Sound-based)</option>
                <option value="Pythagorean">Pythagorean (Sequential)</option>
                <option value="Kabbalah">Kabbalah (Hebrew Letter-based)</option>
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
              ? "COMPUTING RESONANCE VECTORS..."
              : "Calculate Onomastic Concordance & Phonetic Resonance"}
            <span className={styles.badgeHighlight}>SYNC</span>
          </button>
        </div>
      </form>

      <div className={styles.bottomBar}>
        <div className={styles.left}>
          ALGORITHM: <span className={styles.cyanText}>CHALDEAN PHONETICS</span>
        </div>
        <div className={styles.right}>
          <span>
            HELIOCENTRIC ENGINE: <span className={styles.cyanText}>ACTIVE</span>
          </span>
        </div>
      </div>
    </div>
  );
};
