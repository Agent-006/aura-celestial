"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loveCompatibilityScehma,
  LoveCompatibilityValues,
} from "../../schemas/love-compatibility.schema";
import { PartnerFormColumn } from "../PartnerFormColumn/PartnerFormColumn";
import styles from "./love-compatibility-form.module.scss";

export function LoveCompatibilityForm() {
  const { register, handleSubmit } = useForm<LoveCompatibilityValues>({
    resolver: zodResolver(loveCompatibilityScehma),
    defaultValues: {
      partnerA: {
        name: "Aarav V. Singhania",
        dob: "1994-11-23",
        time: "06:45",
        location: "Mumbai, MH",
      },
      partnerB: {
        name: "Devika Priyadarshini",
        dob: "1996-11-04",
        time: "21:14",
        location: "Jaipur, RJ",
      },
    },
  });

  const onSubmit = (data: LoveCompatibilityValues) => {
    console.log("Cockpit Telemetry Sent:", data);
  };

  return (
    <form
      id="love-compatibility-form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.formContainer}
    >
      <div className={styles.grid}>
        <PartnerFormColumn
          label="Partner A (Nārī / Vara)"
          prefix="partnerA"
          register={register}
          badgeText="VECTOR-01 VALIDATED"
        />
        <div className={styles.divider}></div>
        <PartnerFormColumn
          label="Partner B (Kanyā / Vara)"
          prefix="partnerB"
          register={register}
          badgeText="VECTOR-02 VALIDATED"
        />
      </div>
    </form>
  );
}
