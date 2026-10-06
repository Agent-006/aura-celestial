import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles, MapPin, User, ChevronDown, Moon, Info } from "lucide-react";
import { mangalDoshaSchema, MangalDoshaFormValues } from "../../schemas/mangal-dosha.schema";
import styles from "./mangal-dosha-form.module.scss";

interface MangalDoshaFormProps {
  onSubmit: (data: MangalDoshaFormValues) => void;
  isLoading: boolean;
  defaultValues?: Partial<MangalDoshaFormValues>;
}

export const MangalDoshaForm: React.FC<MangalDoshaFormProps> = ({
  onSubmit,
  isLoading,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MangalDoshaFormValues>({
    resolver: zodResolver(mangalDoshaSchema),
    defaultValues: defaultValues || {
      verifyEphemeris: true,
      gender: "Male",
    },
  });

  return (
    <div className={styles.formWrapper}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Moon className={styles.icon} size={18} />
          <h3>CHANDRA (MOON) NATAL COORDINATION & MANGAL SCANNER</h3>
        </div>
        <button
          className={styles.resetBtn}
          onClick={() => reset()}
          type="button"
        >
          RESET RADAR
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label>SUBJECT ARCHETYPE (FULL NAME)</label>
            <div className={styles.inputWrapper}>
              <User size={16} className={styles.inputIcon} />
              <input
                type="text"
                {...register("fullName")}
                placeholder="Admin Astral Observer"
                className={styles.withIcon}
              />
            </div>
            {errors.fullName && (
              <span className={styles.errorText}>{errors.fullName.message}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label>GENDER / POLARITY</label>
            <div className={styles.inputWrapper}>
              <select {...register("gender")}>
                <option value="Male">Male (Pingala Solar Force)</option>
                <option value="Female">Female (Ida Lunar Force)</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
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
              <span className={styles.errorText}>{errors.dateOfBirth.message}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label>PRECISE TIME OF INGRESS (LOCAL STANDARD)</label>
            <div className={styles.inputWrapper}>
              <input type="time" {...register("timeOfBirth")} />
            </div>
            {errors.timeOfBirth && (
              <span className={styles.errorText}>{errors.timeOfBirth.message}</span>
            )}
          </div>
        </div>

        <div className={styles.infoNote}>
          <div className={styles.noteTitle}>
            <Info size={14} />
            CRITICAL ASTROMETRIC NOTE
          </div>
          <p>
            Mangal Dosha is calculated across three distinct vantage points:
            Lagna (Ascendant), Chandra (Moon), and Sukra (Venus). A discrepancy
            of 5 minutes in the Ascendant sign/Moon cusp, potentially
            neutralizing or initiating Kuja affliction.
          </p>
        </div>

        <div className={styles.optionsGroup}>
          <label className={styles.optionItem}>
            <input type="checkbox" {...register("verifyEphemeris")} />
            <span className={styles.optionLabel}>
              Verify Surya Siddhanta / Swiss Ephemeris Data (Master Data) / System Ephemeris Optimization
            </span>
          </label>
        </div>

        <div className={styles.inputGroup}>
          <label>PLACE OF INGRESS (GEOGRAPHIC LOCUS)</label>
          <div className={styles.inputWrapper}>
            <MapPin size={16} className={styles.inputIcon} />
            <input
              type="text"
              {...register("placeOfBirth")}
              placeholder="New Delhi, Delhi, India"
              className={styles.withIcon}
            />
          </div>
          {errors.placeOfBirth && (
            <span className={styles.errorText}>{errors.placeOfBirth.message}</span>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={isLoading}
        >
          {isLoading ? (
            "CALCULATING..."
          ) : (
            <>
              <Sparkles size={18} />
              Calculate Mangal Dosha & Cancellation Status
            </>
          )}
        </button>
      </form>

      {/* These would ideally be populated dynamically post-calculation, but we're mimicking the visual layout */}
      <div className={styles.footerMetrics}>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>MANGAL LONGITUDE</span>
          <span className={styles.metricValue}>
            145° 28&apos; Leo (Simha)
          </span>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>DOSHA STATUS</span>
          <span className={`${styles.metricValue} ${styles.highlight}`}>
            33% (Low Dosha)
          </span>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>MANGAL NAKSHATRA</span>
          <span className={styles.metricValue}>
            Purva Phalguni (2)
          </span>
        </div>
      </div>
    </div>
  );
};
