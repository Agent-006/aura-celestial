"use client";

import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calculator } from "lucide-react";
import {
  luckyVehicleSchema,
  LuckyVehicleFormValues,
} from "../../schemas/lucky-vehicle.schema";
import styles from "./lucky-vehicle-form.module.scss";

interface LuckyVehicleFormProps {
  onSubmit: (values: LuckyVehicleFormValues) => void;
  isLoading: boolean;
}

const COLORS = [
  { value: "White", hex: "#FFFFFF" },
  { value: "Silver", hex: "#C0C0C0" },
  { value: "Gold", hex: "#FFD700" },
  { value: "Black", hex: "#000000" },
  { value: "Blue", hex: "#0000FF" },
  { value: "Red", hex: "#FF0000" },
];

export const LuckyVehicleForm: React.FC<LuckyVehicleFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<LuckyVehicleFormValues>({
    resolver: zodResolver(luckyVehicleSchema),
    defaultValues: {
      mulank: 9,
      bhagyank: 7,
      registrationString: "MH 02 EK 9999",
      vehicleColor: "Black",
      vehicleActivity: "Personal Commute",
      logicProtocol: "Chaldean",
    },
  });

  const selectedColor = useWatch({ control, name: "vehicleColor" });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span className={styles.indicatorGold}></span>
          PHASE 01: REGISTRATION MATRIX
        </div>
        <div className={styles.step}>SWITCH TO MANUAL ACCESS</div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGrid}>
          <div className={styles.leftCol}>
            <div className={styles.inputGroup}>
              <label>
                NATAL NUMEROLOGY SYNTHESIZER{" "}
                <span className={styles.rightAction}>
                  Calculate from Date of Birth
                </span>
              </label>
              <div className={styles.mulankBhagyank}>
                <div>
                  <input
                    type="number"
                    placeholder="Mulank (Root)"
                    {...register("mulank", { valueAsNumber: true })}
                  />
                  {errors.mulank && (
                    <span className={styles.error}>
                      {errors.mulank.message}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Bhagyank (Destiny)"
                    {...register("bhagyank", { valueAsNumber: true })}
                  />
                  {errors.bhagyank && (
                    <span className={styles.error}>
                      {errors.bhagyank.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>VEHICLE PLATE REGISTRATION STRING (ALPHA-NUMERIC)</label>
              <input
                type="text"
                placeholder="e.g. MH 02 EK 9999"
                {...register("registrationString")}
              />
              {errors.registrationString && (
                <span className={styles.error}>
                  {errors.registrationString.message}
                </span>
              )}
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.inputGroup}>
              <label>CHASSIS / BODY PAINT / STYLING CHROMOMETRY</label>
              <div className={styles.colorOptions}>
                {COLORS.map((color) => (
                  <div
                    key={color.value}
                    className={`${styles.colorDot} ${selectedColor === color.value ? styles.active : ""}`}
                    style={{ backgroundColor: color.hex }}
                    title={color.value}
                    onClick={() => setValue("vehicleColor", color.value)}
                  />
                ))}
              </div>
              <input type="hidden" {...register("vehicleColor")} />
              {errors.vehicleColor && (
                <span className={styles.error}>
                  {errors.vehicleColor.message}
                </span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label>PRIMARY OPERATOR INTENT</label>
              <select {...register("vehicleActivity")}>
                <option value="Personal Commute">
                  Personal Commute, Non-Commercial, Sun Concordance
                </option>
                <option value="Commercial Transport">
                  Commercial Transport, Trade Routing, Mercury Dominant
                </option>
                <option value="Luxury / Status">
                  Luxury / Status, Venus Resonance
                </option>
                <option value="Heavy Machinery">
                  Heavy Machinery, Saturn Endurance
                </option>
              </select>
              {errors.vehicleActivity && (
                <span className={styles.error}>
                  {errors.vehicleActivity.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className={styles.bottomAction}>
          <div className={styles.logicProtocol}>
            Logic Protocol: Matrix System
            <select {...register("logicProtocol")}>
              <option value="Chaldean">Chaldean / Pythagorean</option>
              <option value="Pythagorean">Pythagorean Only</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitBtn}
          >
            <Calculator size={18} />
            {isLoading
              ? "CALCULATING MATRICES..."
              : "Calculate Vehicle Ephemeris & Auspicious Vibration"}
          </button>
        </div>
      </form>
    </div>
  );
};
