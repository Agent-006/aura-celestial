"use client";

import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  moonPhaseSchema,
  MoonPhaseValues,
} from "../../schemas/moon-phase.schema";
import styles from "./moon-phase-form.module.scss";

export function MoonPhaseForm() {
  const { register, handleSubmit, control } = useForm<MoonPhaseValues>({
    resolver: zodResolver(moonPhaseSchema),
    defaultValues: {
      isTimeUnknown: false,
    },
  });

  const isTimeUnknown = useWatch({ control, name: "isTimeUnknown" });

  const onSubmit = (data: MoonPhaseValues) => {
    console.log("Lunar Telemetry Submitted:", data);
  };

  return (
    <form
      id="moon-phase-form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.formContainer}
    >
      {/* Row 1: Name & Gender */}
      <div className={styles.formRow}>
        <div className={styles.inputGroup}>
          <label>NAME *</label>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("name")}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>GENDER *</label>
          <select {...register("gender")}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      {/* Row 2: Date of Birth */}
      <div className={styles.formRow}>
        <div className={styles.inputGroup} style={{ flex: 1 }}>
          <label>DATE OF BIRTH *</label>
          <div className={styles.multiSelectGroup}>
            <select {...register("dob.day")}>
              <option value="">Select Day</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select {...register("dob.month")}>
              <option value="">Select Month</option>
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m, i) => (
                <option key={m} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>
            <select {...register("dob.year")}>
              <option value="">Select Year</option>
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i} value={2026 - i}>
                  {2026 - i}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Row 3: Time of Birth & Unknown Checkbox */}
      <div className={styles.formRow}>
        <div className={styles.inputGroup} style={{ flex: 1 }}>
          <div className={styles.labelWithCheckbox}>
            <label>TIME OF BIRTH *</label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" {...register("isTimeUnknown")} />I
              don&apos;t know my time of birth
            </label>
          </div>

          <div
            className={`${styles.multiSelectGroup} ${isTimeUnknown ? styles.disabled : ""}`}
          >
            <select {...register("tob.hour")} disabled={isTimeUnknown}>
              <option value="">Select Hour</option>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
            <select {...register("tob.minute")} disabled={isTimeUnknown}>
              <option value="">Select Minute</option>
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
            <select {...register("tob.second")} disabled={isTimeUnknown}>
              <option value="">Select Second</option>
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Row 4: Place of Birth */}
      <div className={styles.formRow}>
        <div className={styles.inputGroup} style={{ flex: 1 }}>
          <label>PLACE OF BIRTH *</label>
          <input
            type="text"
            placeholder="e.g. New Delhi, Delhi, India"
            {...register("location")}
          />
        </div>
      </div>
    </form>
  );
}
