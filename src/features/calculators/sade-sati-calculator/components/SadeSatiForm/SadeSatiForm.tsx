"use client";
import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sadeSatiFormSchema } from "../../schemas/sadesati.schema";
import { SadeSatiFormValues } from "../../types/sadesati.types";
import styles from "./sade-sati-form.module.scss";

interface SadeSatiFormProps {
  onCalculate: (data: SadeSatiFormValues) => void;
}

export function SadeSatiForm({ onCalculate }: SadeSatiFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SadeSatiFormValues>({
    resolver: zodResolver(sadeSatiFormSchema),
    defaultValues: {
      isTimeUnknown: false,
    },
  });

  const isTimeUnknown = useWatch({
    control,
    name: "isTimeUnknown",
  });

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onCalculate)}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Sade Sati & Dhaiya Timer</h2>
        <p className={styles.formSubtitle}>
          Enter your birth details below to compute Saturn&apos;s 7.5 year major
          karmic cycle.
        </p>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.field}>
          <label>Name *</label>
          <input type="text" placeholder="Your Name" {...register("name")} />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label>Gender *</label>
          <select {...register("gender")}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <span className={styles.error}>{errors.gender.message}</span>
          )}
        </div>
      </div>
      <div className={styles.field}>
        <label>Date of Birth *</label>
        <div className={styles.multiSelect}>
          <select {...register("dobDay")}>
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i} value={String(i + 1).padStart(2, "0")}>
                {String(i + 1).padStart(2, "0")}
              </option>
            ))}
          </select>
          <select {...register("dobMonth")}>
            <option value="">Month</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={String(i + 1).padStart(2, "0")}>
                {String(i + 1).padStart(2, "0")}
              </option>
            ))}
          </select>
          <select {...register("dobYear")}>
            <option value="">Year</option>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i} value={String(new Date().getFullYear() - i)}>
                {new Date().getFullYear() - i}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <div className={styles.timeHeader}>
          <label>Time of Birth *</label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" {...register("isTimeUnknown")} />I don&apos;t
            know my time of birth
          </label>
        </div>
        <div className={styles.multiSelect}>
          <select {...register("tobHour")} disabled={isTimeUnknown}>
            <option value="">HH</option>
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={String(i).padStart(2, "0")}>
                {String(i).padStart(2, "0")}
              </option>
            ))}
          </select>
          <select {...register("tobMinute")} disabled={isTimeUnknown}>
            <option value="">MM</option>
            {Array.from({ length: 60 }, (_, i) => (
              <option key={i} value={String(i).padStart(2, "0")}>
                {String(i).padStart(2, "0")}
              </option>
            ))}
          </select>
          <select {...register("tobSecond")} disabled={isTimeUnknown}>
            <option value="">SS</option>
            {Array.from({ length: 60 }, (_, i) => (
              <option key={i} value={String(i).padStart(2, "0")}>
                {String(i).padStart(2, "0")}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label>Place of Birth *</label>
        <input
          type="text"
          placeholder="City, State, Country"
          {...register("birthPlace")}
        />
        {errors.birthPlace && (
          <span className={styles.error}>{errors.birthPlace.message}</span>
        )}
      </div>
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Calculating..." : "✦ Calculate my Shani Sade Sati ✦"}
      </button>
    </form>
  );
}
