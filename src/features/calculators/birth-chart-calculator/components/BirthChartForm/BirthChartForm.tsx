import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles, MapPin, User, ChevronDown, Activity, Info } from "lucide-react";
import { birthChartSchema, BirthChartFormValues } from "../../schemas/birth-chart.schema";
import styles from "./birth-chart-form.module.scss";

interface BirthChartFormProps {
  onSubmit: (data: BirthChartFormValues) => void;
  isLoading: boolean;
  defaultValues?: Partial<BirthChartFormValues>;
}

export const BirthChartForm: React.FC<BirthChartFormProps> = ({
  onSubmit,
  isLoading,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BirthChartFormValues>({
    resolver: zodResolver(birthChartSchema),
    defaultValues: defaultValues || {
      gender: "Male",
      timePrecision: "Exact",
      ayanamsa: "Lahiri",
      houseSystem: "Whole Sign",
      chartStyle: "North Indian",
    },
  });

  return (
    <div className={styles.formWrapper}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Activity className={styles.icon} size={18} />
          <h3>SUBJECT ASTROMETRIC COORDINATES</h3>
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
                <option value="Male">Male (Pingala Solar)</option>
                <option value="Female">Female (Ida Lunar)</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
            </div>
          </div>
        </div>

        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label>DATE OF NATIVITY (GREGORIAN)</label>
            <div className={styles.inputWrapper}>
              <input type="date" {...register("dateOfBirth")} />
            </div>
            {errors.dateOfBirth && (
              <span className={styles.errorText}>{errors.dateOfBirth.message}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label>PRECISE TIME OF INGRESS</label>
            <div className={styles.inputWrapper}>
              <input type="time" {...register("timeOfBirth")} />
            </div>
            {errors.timeOfBirth && (
              <span className={styles.errorText}>{errors.timeOfBirth.message}</span>
            )}
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>TIME PRECISION ASSURANCE</label>
          <div className={styles.optionsGroup}>
            <label className={styles.optionItem}>
              <input type="radio" value="Exact" {...register("timePrecision")} />
              <span className={styles.optionLabel}>Exact / Verified</span>
            </label>
            <label className={styles.optionItem}>
              <input type="radio" value="Approximate" {...register("timePrecision")} />
              <span className={styles.optionLabel}>Approximate (Needs Rectification)</span>
            </label>
          </div>
        </div>

        <div className={styles.infoNote}>
          <div className={styles.noteTitle}>
            <Info size={14} />
            CRITICAL ASTROMETRIC NOTE
          </div>
          <p>
            The ascendant (Lagna) changes approximately every 2 hours. A discrepancy of just 4-5 minutes can alter Divisional Charts (Vargas) entirely.
          </p>
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

        <div className={styles.grid3}>
          <div className={styles.inputGroup}>
            <label>AYANAMSA MODEL</label>
            <div className={styles.inputWrapper}>
              <select {...register("ayanamsa")}>
                <option value="Lahiri">Lahiri (Chitra Paksha)</option>
                <option value="Raman">Raman</option>
                <option value="KP">KP</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>HOUSE SYSTEM</label>
            <div className={styles.inputWrapper}>
              <select {...register("houseSystem")}>
                <option value="Whole Sign">Whole Sign</option>
                <option value="Placidus">Placidus</option>
                <option value="Koch">Koch</option>
                <option value="Equal">Equal</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>CHART STYLE</label>
            <div className={styles.inputWrapper}>
              <select {...register("chartStyle")}>
                <option value="North Indian">North Indian (Diamond)</option>
                <option value="South Indian">South Indian (Square)</option>
                <option value="East Indian">East Indian</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={isLoading}
        >
          {isLoading ? (
            "CALCULATING EPHEMERIS..."
          ) : (
            <>
              <Sparkles size={18} />
              Calculate & Synthesize Natal Data
            </>
          )}
        </button>
      </form>
    </div>
  );
};
