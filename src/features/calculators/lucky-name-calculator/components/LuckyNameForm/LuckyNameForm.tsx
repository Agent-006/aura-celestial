"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hexagon, ChevronDown, Activity, Sparkles } from "lucide-react";
import {
  luckyNameCalculatorSchema,
  LuckyNameCalculatorFormValues,
} from "../../schemas/lucky-name-calculator.schema";
import styles from "./lucky-name-form.module.scss";

interface LuckyNameFormProps {
  onCalculate: (values: LuckyNameCalculatorFormValues) => void;
  isLoading: boolean;
}

export const LuckyNameForm: React.FC<LuckyNameFormProps> = ({
  onCalculate,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LuckyNameCalculatorFormValues>({
    resolver: zodResolver(luckyNameCalculatorSchema),
    defaultValues: {
      fullName: "",
      numerologySystem: "chaldean",
      usageIntent: "general",
      phoneticFilter: "apply",
    },
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <div className={styles.left}>
          <Hexagon size={14} className={styles.iconGold} />
          <span className={styles.eyebrow}>
            Sacred Onomastic Ingress Chassis
          </span>
        </div>
        <div className={styles.right}>
          <span className={styles.cyanText}>REALTIME PARSING: ACTIVE</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onCalculate)} className={styles.formBody}>
        <div className={styles.inputsRowTop}>
          <div className={styles.inputGroup} style={{ flex: 2 }}>
            <label>FULL NAME / PROPOSED NAME</label>
            <div className={styles.inputWithIcon}>
              <input
                type="text"
                placeholder="Vikramaditya"
                {...register("fullName")}
              />
              <Sparkles size={16} className={styles.inputIcon} />
            </div>
            {errors.fullName && (
              <span className={styles.error}>{errors.fullName.message}</span>
            )}
            <span className={styles.helpText}>Enter exact legal or proposed spelling</span>
          </div>

          <div className={styles.inputGroup} style={{ flex: 1 }}>
            <label>NUMEROLOGY SYSTEM</label>
            <div className={styles.selectWrapper}>
              <select {...register("numerologySystem")}>
                <option value="chaldean">Chaldean / Vedic (Sankhya Standard)</option>
                <option value="pythagorean">Pythagorean (Western)</option>
              </select>
              <ChevronDown size={14} className={styles.selectIcon} />
            </div>
          </div>
        </div>

        <div className={styles.inputsRowDate}>
          <div className={styles.inputGroup}>
            <label>DATE OF BIRTH (FOR TRIAD SYNASTRY)</label>
            <div className={styles.dateInputs}>
              <input type="text" placeholder="DD" {...register("birthDate")} />
              <input type="text" placeholder="MM" {...register("birthMonth")} />
              <input type="text" placeholder="YYYY" {...register("birthYear")} />
            </div>
            <span className={styles.helpText}>Optional. Used to compute Triad (Mulank, Bhagyank, Namank) alignment.</span>
          </div>
        </div>

        <div className={styles.inputsRowBottom}>
          <div className={styles.inputGroup} style={{ flex: 1 }}>
            <label>PRIMARY PURPOSE / USAGE INTENT</label>
            <div className={styles.selectWrapper}>
              <select {...register("usageIntent")}>
                <option value="general">General / Legal Name</option>
                <option value="business">Business / Brand Name</option>
                <option value="spiritual">Spiritual / Initiatory Name</option>
                <option value="penname">Pen Name / Alias</option>
              </select>
              <ChevronDown size={14} className={styles.selectIcon} />
            </div>
          </div>

          <div className={styles.inputGroup} style={{ flex: 1 }}>
            <label>PHONETIC CORRECTION FILTER</label>
            <div className={styles.selectWrapper}>
              <select {...register("phoneticFilter")}>
                <option value="apply">Apply Chaldean Phonetic Smoothing</option>
                <option value="strict">Strict Numerical Assignment</option>
              </select>
              <ChevronDown size={14} className={styles.selectIcon} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={isLoading}
        >
          <Activity size={16} className={styles.btnIcon} />
          {isLoading
            ? "COMPUTING VIBRATIONAL FREQUENCY..."
            : "INITIALIZE ONOMASTIC DECODE (CALCULATE VIBRATIONAL BLUEPRINT)"}
        </button>
      </form>

      <div className={styles.bottomBar}>
        <div className={styles.left}>
          <span>
            DATABANK MATCH:{" "}
            <span className={styles.goldText}>Positive (Level 1)</span>
          </span>
        </div>
        <div className={styles.right}>
          <span>
            SYNCHRONIZING ORBITAL DATA{" "}
            <span className={styles.cyanText}>...</span>
          </span>
        </div>
      </div>
    </div>
  );
};
