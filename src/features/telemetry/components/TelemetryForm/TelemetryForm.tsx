"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import {
  telemetryFormSchema,
  type TelemetryFormValues,
} from "../../schemas/telemetry.schema";
import styles from "./telemetry-form.module.scss";

interface TelemetryFormProps {
  onSubmit: (data: TelemetryFormValues) => void;
  isLoading: boolean;
}

export function TelemetryForm({ onSubmit, isLoading }: TelemetryFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TelemetryFormValues>({
    resolver: zodResolver(telemetryFormSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      exactTime: "",
      placeOfBirth: "",
      chartType: "north",
    },
  });

  const chartType = useWatch({
    control,
    name: "chartType",
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* --- Full Name --- */}
      <div className={styles.fieldGroup}>
        <label>FULL NAME</label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Aarav V. Singhania"
            {...register("fullName")}
            className={errors.fullName ? styles.errorInput : ""}
          />
          <User className={styles.icon} size={14} />
        </div>
        {errors.fullName && (
          <span className={styles.errorMessage}>{errors.fullName.message}</span>
        )}
      </div>
      {/* --- Date & Time Row --- */}
      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label>DATE OF BIRTH</label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="11/23/1994"
              {...register("dateOfBirth")}
              className={errors.dateOfBirth ? styles.errorInput : ""}
            />
          </div>
          {errors.dateOfBirth && (
            <span className={styles.errorMessage}>
              {errors.dateOfBirth.message}
            </span>
          )}
        </div>
        <div className={styles.fieldGroup}>
          <label>EXACT TIME</label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="06:45 AM"
              {...register("exactTime")}
              className={errors.exactTime ? styles.errorInput : ""}
            />
          </div>
          {errors.exactTime && (
            <span className={styles.errorMessage}>
              {errors.exactTime.message}
            </span>
          )}
        </div>
      </div>
      {/* --- Place of Birth --- */}
      <div className={styles.fieldGroup}>
        <label>PLACE OF BIRTH (CITY, COUNTRY)</label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Mumbai, Maharashtra, India (18°58'N, 72°49'E)"
            {...register("placeOfBirth")}
            className={errors.placeOfBirth ? styles.errorInput : ""}
          />
          <MapPin className={styles.icon} size={14} />
        </div>
        {errors.placeOfBirth && (
          <span className={styles.errorMessage}>
            {errors.placeOfBirth.message}
          </span>
        )}
      </div>
      {/* --- Chart Type Radios --- */}
      <div className={styles.radioGroup}>
        <label className={styles.radioLabel}>
          <input type="radio" value="north" {...register("chartType")} />
          <span className={styles.customRadio}>
            {chartType === "north" && <span className={styles.radioDot} />}
          </span>
          North Indian Diamond
        </label>

        <label className={styles.radioLabel}>
          <input type="radio" value="south" {...register("chartType")} />
          <span className={styles.customRadio}>
            {chartType === "south" && <span className={styles.radioDot} />}
          </span>
          South Indian Box
        </label>
      </div>
      {/* --- Submit Button --- */}
      <Button 
        type="submit" 
        variant="solid" 
        fullWidth 
        disabled={isLoading}
        leftIcon={
          <span className={styles.btnPrefix}>
            ASTRO<span className={styles.boxIcon}>▣</span>GRAPHY_ /
          </span>
        }
      >
        {isLoading ? "COMPUTING..." : "CREATE YOUR FREE BIRTH CHART"}
      </Button>
    </form>
  );
}
