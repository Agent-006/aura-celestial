"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Calendar, MapPin, Search } from "lucide-react";
import { transitSchema, TransitFormValues } from "../../schemas/transit.schema";
import styles from "./transit-form.module.scss";

interface TransitFormProps {
  onSubmit: (data: TransitFormValues) => void;
  isLoading: boolean;
}

export const TransitForm: React.FC<TransitFormProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransitFormValues>({
    resolver: zodResolver(transitSchema),
    defaultValues: {
      ayanamsa: "Lahiri",
      houseSystem: "Whole Sign",
      chartStyle: "North Indian",
      nodeCalculation: "True Node",
    },
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerBar}>
        <div className={styles.left}>
          <span className={styles.activeDot}></span>
          <span>NATIVE 001 : PLACEMENT COORDS LOCKED V3.4</span>
        </div>
        <div className={styles.right}>
          <span>VPC : ISO-45000-09-38</span>
          <span>READY TO INTERSECT</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <div className={styles.sectionsWrapper}>
          
          {/* Natal Section */}
          <div className={styles.formSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.titleWithIcon}>
                <User size={16} /> Natal Ephemeris Coordinates
              </div>
              <span className={styles.badge}>NATIVE COORDS</span>
            </div>
            
            <div className={styles.inputsGrid}>
              <div className={styles.inputGroup}>
                <label>NATIVE DOSSIER / FULL NAME</label>
                <div className={styles.inputWrapper}>
                  <input type="text" placeholder="Aarav V. Singhania" {...register("fullName")} />
                </div>
                {errors.fullName && <span className={styles.error}>{errors.fullName.message}</span>}
              </div>
              
              <div className={styles.inputGroup}>
                <label>DATE OF BIRTH / DD MM YYYY</label>
                <div className={styles.inputWrapper}>
                  <Calendar size={14} className={styles.icon} />
                  <input type="text" placeholder="14   /   09   /   1988" {...register("dateOfBirth")} className={styles.withIcon} />
                </div>
                {errors.dateOfBirth && <span className={styles.error}>{errors.dateOfBirth.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label>TIME OF BIRTH / HH:MM</label>
                <div className={styles.inputWrapper}>
                  <input type="text" placeholder="18:45" {...register("timeOfBirth")} />
                  <span className={styles.iconRight}>@</span>
                </div>
                {errors.timeOfBirth && <span className={styles.error}>{errors.timeOfBirth.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label>PLACE OF BIRTH / COORDINATES GEOSYNC</label>
                <div className={styles.inputWrapper}>
                  <input type="text" placeholder="New Delhi, India (28°36'N, 77°12'E)" {...register("placeOfBirth")} />
                </div>
                {errors.placeOfBirth && <span className={styles.error}>{errors.placeOfBirth.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label>MOON SIGN (JANMA RASHI)</label>
                <div className={styles.selectWrapper}>
                  <select {...register("moonSign")}>
                    <option value="">Select Moon Sign</option>
                    <option value="Aries">Aries (Mesha)</option>
                    <option value="Cancer">Cancer (Karka)</option>
                    <option value="Scorpio">Scorpio (Vrischika)</option>
                  </select>
                </div>
                {errors.moonSign && <span className={styles.error}>{errors.moonSign.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label>SUN SIGN (LAGNA)</label>
                <div className={styles.selectWrapper}>
                  <select {...register("sunSign")}>
                    <option value="">Select Sun Sign</option>
                    <option value="Leo">Leo (Simha)</option>
                    <option value="Virgo">Virgo (Kanya)</option>
                    <option value="Libra">Libra (Tula)</option>
                  </select>
                </div>
                {errors.sunSign && <span className={styles.error}>{errors.sunSign.message}</span>}
              </div>
            </div>
          </div>

          {/* Target Gochar Section */}
          <div className={styles.formSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.titleWithIcon}>
                <Search size={16} /> Target Gochar Horizon
              </div>
              <span className={styles.badgeActive}>ACTIVE EPOCH</span>
            </div>
            
            <div className={styles.inputsGrid}>
              <div className={styles.inputGroup}>
                <label>TRANSIT DATE / TARGET HORIZON</label>
                <div className={styles.inputWrapper}>
                  <Calendar size={14} className={styles.icon} />
                  <input type="text" placeholder="Current Transit (Current Date + Time)" {...register("transitDate")} className={styles.withIcon} />
                </div>
                {errors.transitDate && <span className={styles.error}>{errors.transitDate.message}</span>}
              </div>
              
              <div className={styles.inputGroup}>
                <label>TRANSIT LOCATION / GEOSYNC</label>
                <div className={styles.inputWrapper}>
                  <MapPin size={14} className={styles.icon} />
                  <input type="text" placeholder="Current Geosync (Location)" {...register("transitLocation")} className={styles.withIcon} />
                </div>
                {errors.transitLocation && <span className={styles.error}>{errors.transitLocation.message}</span>}
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
                <label>ORBITAL HOUSE SYSTEM</label>
                <div className={styles.selectWrapper}>
                  <select {...register("houseSystem")}>
                    <option value="Whole Sign">Whole Sign</option>
                    <option value="Placidus">Placidus</option>
                    <option value="Koch">Koch</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>TRANSIT CHART STYLE</label>
                <div className={styles.selectWrapper}>
                  <select {...register("chartStyle")}>
                    <option value="North Indian">North Indian (Diamond)</option>
                    <option value="South Indian">South Indian (Square)</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>NODE CALCULATION (RAHU / KETU)</label>
                <div className={styles.selectWrapper}>
                  <select {...register("nodeCalculation")}>
                    <option value="True Node">True Node</option>
                    <option value="Mean Node">Mean Node</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.submitSection}>
          <button type="submit" disabled={isLoading} className={styles.submitBtn}>
            {isLoading ? "INITIATING OVERLAY..." : "Calculate Sidereal Gochar & Natal Transit Intersect"}
            <span className={styles.badgeHighlight}>PRECISION DIAGNOSTICS</span>
          </button>
        </div>
      </form>
      
      <div className={styles.bottomBar}>
        <div className={styles.left}>REAL-TIME EPHEMERIS SYNC: TRUE</div>
        <div className={styles.right}>
          <span>ORBITAL DEVIATION: <span className={styles.cyan}>±0.0001 DEG</span></span>
          <span>NODE ALIGNMENT: <span className={styles.cyan}>TRUE LUNAR</span></span>
          <span>ISO DATA: <span className={styles.cyan}>FETCHING</span></span>
        </div>
      </div>
    </div>
  );
};
