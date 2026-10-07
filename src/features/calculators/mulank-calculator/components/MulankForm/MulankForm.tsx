import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Database, User, Calendar, MapPin, ChevronDown } from "lucide-react";
import {
  mulankCalculatorSchema,
  MulankCalculatorFormValues,
} from "../../schemas/mulank-calculator.schema";
import styles from "./mulank-form.module.scss";

interface MulankFormProps {
  onSubmit: (data: MulankCalculatorFormValues) => void;
  isLoading: boolean;
}

export const MulankForm: React.FC<MulankFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MulankCalculatorFormValues>({
    resolver: zodResolver(mulankCalculatorSchema),
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerBar}>
        <div className={styles.left}>
          <Database size={12} />
          <span>CHASSIS HUB-9 / ROOT NUMBER INGRESS V2.0</span>
        </div>
        <div className={styles.right}>
          <span>EPOCH: J2000.0</span>
          <span className={styles.cyanText}>READY FOR INGRESS</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <div className={styles.inputsRowTop}>
          <div className={styles.inputGroup}>
            <label>SUBJECT DOSSIER / FULL NAME</label>
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
            <label>DATE OF BIRTH</label>
            <div className={styles.inputWrapper}>
              <Calendar size={14} className={styles.icon} />
              <input
                type="date"
                {...register("dateOfBirth")}
                className={styles.withIcon}
              />
            </div>
            {errors.dateOfBirth && (
              <span className={styles.error}>{errors.dateOfBirth.message}</span>
            )}
          </div>

          <div className={styles.multiInputGroup}>
            <div className={styles.inputGroup}>
              <label>BIRTH DAY (0-9)</label>
              <input type="text" placeholder="24" {...register("birthDay")} />
            </div>
            <div className={styles.inputGroup}>
              <label>BIRTH MONTH</label>
              <input type="text" placeholder="03" {...register("birthMonth")} />
            </div>
            <div className={styles.inputGroup}>
              <label>BIRTH YEAR</label>
              <input
                type="text"
                placeholder="1999"
                {...register("birthYear")}
              />
            </div>
          </div>
        </div>

        <div className={styles.inputsRowBottom}>
          <div className={styles.inputGroup}>
            <label>PLACE OF CONCEPTION (OPTIONAL)</label>
            <div className={styles.inputWrapper}>
              <MapPin size={14} className={styles.icon} />
              <input
                type="text"
                placeholder="New Delhi, India"
                {...register("placeOfConception")}
                className={styles.withIcon}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>ALGORITHM SELECTION</label>
            <div className={styles.selectWrapper}>
              <select {...register("algorithmSelection")}>
                <option value="vedic">Vedic (Chaldean/Pythagorean) &gt;</option>
              </select>
              <ChevronDown size={14} className={styles.selectIcon} />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>EPHEMERIS SYSTEM</label>
            <div className={styles.selectWrapper}>
              <select {...register("ephemerisSystem")}>
                <option value="lahiri">
                  Chitrapaksha (Lahiri) Ayanamsa &gt;
                </option>
              </select>
              <ChevronDown size={14} className={styles.selectIcon} />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>PLANETARY OVERRIDE</label>
            <div className={styles.selectWrapper}>
              <select {...register("planetaryOverride")}>
                <option value="none">
                  None (Default D9 Navamsha Routing) &gt;
                </option>
              </select>
              <ChevronDown size={14} className={styles.selectIcon} />
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
              ? "COMPUTING MATRIX..."
              : "CALCULATE SACRED MULANK & RULING GRAHA RESONANCE"}
          </button>
        </div>
      </form>

      <div className={styles.bottomBar}>
        <div className={styles.left}>
          <Database size={10} className={styles.iconCyan} />
          <span>
            REALTIME PARSING: <span className={styles.cyanText}>ACTIVE</span>
          </span>
        </div>
        <div className={styles.right}>
          <span>
            DATABANK: <span className={styles.cyanText}>CONNECTED</span>
          </span>
          <span>•</span>
          <span>
            EPHEMERIS HEARTBEAT: <span className={styles.cyanText}>SYNCED</span>
          </span>
          <span>•</span>
          <span>
            VIBRATIONAL SYNC: <span className={styles.cyanText}>99.9%</span>
          </span>
          <span>•</span>
          <span>
            SYSTEM PERFORMANCE:{" "}
            <span className={styles.cyanText}>OPTIMAL [120MS]</span>
          </span>
        </div>
      </div>
    </div>
  );
};
