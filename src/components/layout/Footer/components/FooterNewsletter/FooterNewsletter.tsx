"use client";

import { Atom, Send, Sparkles } from "lucide-react";
import { useNewsletter } from "../../hooks/useNewsletter";
import styles from "./FooterNewsletter.module.scss";

export const FooterNewsletter = () => {
  const { form, subscribe, isLoading, isSuccess } = useNewsletter();

  return (
    <div className={styles.subscribeSide}>
      <div className={styles.subscribeHeader}>
        <div className={styles.subscribeTitle}>
          <Sparkles size={16} className={styles.sparkle} /> Subscribe to the
          Sidereal Dispatch
        </div>
      </div>
      <p className={styles.subscribeDesc}>
        Receive automated planetary ingress alerts, retrograde station vectors,
        Nakshatra transits, and peer-reviewed astronomical research monographs
        direct to your terminal.
      </p>

      <form
        onSubmit={form.handleSubmit(subscribe)}
        className={styles.inputGroup}
      >
        <Atom size={16} className={styles.inputIcon} />
        <input
          type="text"
          placeholder="Enter coordinate or email..."
          className={styles.input}
          disabled={isLoading}
          {...form.register("contact")}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={styles.dispatchBtn}
        >
          {isLoading ? "ROUTING..." : "DISPATCH"} <Send size={14} />
        </button>
      </form>

      {isSuccess && (
        <div className={styles.successMessage}>
          Trajectory alignment confirmed.
        </div>
      )}
      {form.formState.errors.contact && (
        <div className={styles.errorMessage}>
          {form.formState.errors.contact.message}
        </div>
      )}
    </div>
  );
};
