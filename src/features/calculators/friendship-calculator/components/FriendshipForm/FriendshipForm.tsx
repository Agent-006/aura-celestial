"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calculator } from "lucide-react";
import { friendshipSchema, FriendshipFormValues } from "../../schemas/friendship.schema";
import styles from "./friendship-form.module.scss";

interface FriendshipFormProps {
  onSubmit: (values: FriendshipFormValues) => void;
  isLoading: boolean;
}

export const FriendshipForm: React.FC<FriendshipFormProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FriendshipFormValues>({
    resolver: zodResolver(friendshipSchema),
    defaultValues: {
      alphaName: "Ananya Sharma",
      alphaDob: "15/08/1995",
      alphaTob: "10:30 AM",
      alphaPob: "Mumbai, India",
      betaName: "Rohan Mehta",
      betaDob: "22/10/1993",
      betaTob: "08:15 PM",
      betaPob: "New Delhi, India",
      context: "Childhood / Lifelong Synergy",
      duration: "10 Years",
    },
  });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.subjectsGrid}>
          {/* SUBJECT ALPHA */}
          <div className={styles.subjectPanel}>
            <div className={styles.panelHeader}>
              <div><span className={styles.indicator}></span> SUBJECT ALPHA : NATIVE 001</div>
              <div className={styles.right}>Gender : Female ♀</div>
            </div>
            
            <div className={styles.formFields}>
              <div className={styles.inputGroup}>
                <label>FULL LEGAL NAME</label>
                <input type="text" placeholder="e.g. Ananya Sharma" {...register("alphaName")} />
                {errors.alphaName && <span className={styles.error}>{errors.alphaName.message}</span>}
              </div>
              
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>DATE OF BIRTH</label>
                  <input type="text" placeholder="DD/MM/YYYY" {...register("alphaDob")} />
                  {errors.alphaDob && <span className={styles.error}>{errors.alphaDob.message}</span>}
                </div>
                <div className={styles.inputGroup}>
                  <label>TIME OF BIRTH</label>
                  <input type="text" placeholder="HH:MM AM/PM" {...register("alphaTob")} />
                  {errors.alphaTob && <span className={styles.error}>{errors.alphaTob.message}</span>}
                </div>
              </div>
              
              <div className={styles.inputGroup}>
                <label>PLACE OF BIRTH</label>
                <input type="text" placeholder="City, State, Country" {...register("alphaPob")} />
                {errors.alphaPob && <span className={styles.error}>{errors.alphaPob.message}</span>}
              </div>
            </div>
          </div>

          {/* SUBJECT BETA */}
          <div className={styles.subjectPanel}>
            <div className={styles.panelHeader}>
              <div><span className={styles.indicator} style={{background: '#ffd700'}}></span> SUBJECT BETA : NATIVE 002</div>
              <div className={styles.right}>Gender : Male ♂</div>
            </div>
            
            <div className={styles.formFields}>
              <div className={styles.inputGroup}>
                <label>FULL LEGAL NAME</label>
                <input type="text" placeholder="e.g. Rohan Mehta" {...register("betaName")} />
                {errors.betaName && <span className={styles.error}>{errors.betaName.message}</span>}
              </div>
              
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>DATE OF BIRTH</label>
                  <input type="text" placeholder="DD/MM/YYYY" {...register("betaDob")} />
                  {errors.betaDob && <span className={styles.error}>{errors.betaDob.message}</span>}
                </div>
                <div className={styles.inputGroup}>
                  <label>TIME OF BIRTH</label>
                  <input type="text" placeholder="HH:MM AM/PM" {...register("betaTob")} />
                  {errors.betaTob && <span className={styles.error}>{errors.betaTob.message}</span>}
                </div>
              </div>
              
              <div className={styles.inputGroup}>
                <label>PLACE OF BIRTH</label>
                <input type="text" placeholder="City, State, Country" {...register("betaPob")} />
                {errors.betaPob && <span className={styles.error}>{errors.betaPob.message}</span>}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contextRow}>
          <div className={styles.inputGroup}>
            <label>PLATONIC SHARED CONTEXT</label>
            <select {...register("context")}>
              <option value="Childhood / Lifelong Synergy">Childhood / Lifelong Synergy - 11th House Matrix</option>
              <option value="Workplace / Corporate Alliance">Workplace / Corporate Alliance - 10th House Matrix</option>
              <option value="Intellectual / Academic Resonance">Intellectual / Academic Resonance - 5th House Matrix</option>
              <option value="Casual Social Acquaintance">Casual Social Acquaintance - 3rd House Matrix</option>
            </select>
            {errors.context && <span className={styles.error}>{errors.context.message}</span>}
          </div>
          
          <div className={styles.inputGroup}>
            <label>ORBITAL CONTEXT TIME / DISTANCE</label>
            <input type="text" placeholder="e.g. 10 Years" {...register("duration")} />
            {errors.duration && <span className={styles.error}>{errors.duration.message}</span>}
          </div>
        </div>

        <div className={styles.submitWrapper}>
          <button type="submit" disabled={isLoading} className={styles.submitBtn}>
            <Calculator size={18} />
            {isLoading ? "CALCULATING MATRICES..." : "Calculate Platonic Ephemeris & Friendship Concordance"}
          </button>
        </div>
      </form>
    </div>
  );
};
