"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { atmakarakaFormSchema } from "../../schemas/atmakaraka.schema";
import { AtmakarakaFormValues } from "../../types/atmakaraka.types";
import styles from "./atmakaraka-form.module.scss";

interface AtmakarakaFormProps {
  onCalculate: (data: AtmakarakaFormValues) => void;
  isLoading: boolean;
}

export const AtmakarakaForm: React.FC<AtmakarakaFormProps> = ({
  onCalculate,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AtmakarakaFormValues>({
    resolver: zodResolver(atmakarakaFormSchema),
    defaultValues: {
      name: "",
      gender: "Male",
      dateOfBirth: "",
      timeOfBirth: "",
      isTimeUnknown: false,
      placeOfBirth: "",
    },
  });

  const isTimeUnknown = watch("isTimeUnknown");

  // Local state for complex dropdowns
  const [dob, setDob] = useState({ day: "", month: "", year: "" });
  const [tob, setTob] = useState({ hour: "", minute: "", second: "" });

  // Update react-hook-form value when custom DOB changes
  const handleDobChange = (field: "day" | "month" | "year", value: string) => {
    const newDob = { ...dob, [field]: value };
    setDob(newDob);
    if (newDob.year && newDob.month && newDob.day) {
      setValue("dateOfBirth", `${newDob.year}-${newDob.month}-${newDob.day}`, {
        shouldValidate: true,
      });
    }
  };

  // Update react-hook-form value when custom TOB changes
  const handleTobChange = (
    field: "hour" | "minute" | "second",
    value: string,
  ) => {
    const newTob = { ...tob, [field]: value };
    setTob(newTob);
    if (newTob.hour && newTob.minute && newTob.second) {
      setValue(
        "timeOfBirth",
        `${newTob.hour}:${newTob.minute}:${newTob.second}`,
        { shouldValidate: true },
      );
    }
  };

  const onSubmit = (data: AtmakarakaFormValues) => {
    onCalculate(data);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>
        <span className={styles.dot}></span> Calculate your Atmakaraka &
        Darakaraka here <span className={styles.moon}>🌙</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* NAME */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Name <span className={styles.asterisk}>*</span>
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Admin"
            {...register("name")}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        {/* GENDER */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Gender <span className={styles.asterisk}>*</span>
          </label>
          <div className={styles.selectWrapper}>
            <select className={styles.select} {...register("gender")}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {errors.gender && (
            <span className={styles.error}>{errors.gender.message}</span>
          )}
        </div>

        {/* DATE OF BIRTH */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Date of Birth <span className={styles.asterisk}>*</span>
          </label>
          <div className={styles.tripleSelectGroup}>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={dob.day}
                onChange={(e) => handleDobChange("day", e.target.value)}
              >
                <option value="" disabled>
                  Day
                </option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={dob.month}
                onChange={(e) => handleDobChange("month", e.target.value)}
              >
                <option value="" disabled>
                  Month
                </option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={dob.year}
                onChange={(e) => handleDobChange("year", e.target.value)}
              >
                <option value="" disabled>
                  Year
                </option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <input type="hidden" {...register("dateOfBirth")} />
          {errors.dateOfBirth && (
            <span className={styles.error}>{errors.dateOfBirth.message}</span>
          )}
        </div>

        {/* TIME OF BIRTH */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Time of Birth <span className={styles.asterisk}>*</span>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              className={styles.checkbox}
              {...register("isTimeUnknown")}
            />
            I don&apos;t know my time of birth
          </label>

          <div
            className={`${styles.tripleSelectGroup} ${isTimeUnknown ? styles.disabled : ""}`}
          >
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                disabled={isTimeUnknown}
                value={tob.hour}
                onChange={(e) => handleTobChange("hour", e.target.value)}
              >
                <option value="" disabled>
                  Hour
                </option>
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={String(i).padStart(2, "0")}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                disabled={isTimeUnknown}
                value={tob.minute}
                onChange={(e) => handleTobChange("minute", e.target.value)}
              >
                <option value="" disabled>
                  Min
                </option>
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i} value={String(i).padStart(2, "0")}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                disabled={isTimeUnknown}
                value={tob.second}
                onChange={(e) => handleTobChange("second", e.target.value)}
              >
                <option value="" disabled>
                  Sec
                </option>
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i} value={String(i).padStart(2, "0")}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <input type="hidden" {...register("timeOfBirth")} />
          {errors.timeOfBirth && (
            <span className={styles.error}>{errors.timeOfBirth.message}</span>
          )}
        </div>

        {/* PLACE OF BIRTH */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Place of Birth <span className={styles.asterisk}>*</span>
          </label>
          <div className={styles.inputWithClear}>
            <input
              type="text"
              className={styles.input}
              placeholder="New Delhi, Delhi, India"
              {...register("placeOfBirth")}
            />
            <button
              type="button"
              className={styles.clearBtn}
              onClick={() => setValue("placeOfBirth", "")}
            >
              ×
            </button>
          </div>
          {errors.placeOfBirth && (
            <span className={styles.error}>{errors.placeOfBirth.message}</span>
          )}
        </div>

        <button type="submit" className={styles.submitBtn} disabled={isLoading}>
          {isLoading
            ? "Reading Akashic Records..."
            : "✦ Calculate my Atmakaraka and Darakaraka ✦"}
        </button>
      </form>
    </div>
  );
};
