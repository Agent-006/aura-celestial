"use client";

import Image from "next/image";
import { Star, MessageSquare, PhoneCall, Bell } from "lucide-react";
import type { Astrologer } from "../../types";
import styles from "./astrologer-card.module.scss";

interface AstrologerCardProps {
  astrologer: Astrologer;
}

export function AstrologerCard({ astrologer }: AstrologerCardProps) {
  const isOnline = astrologer.status === "online";

  return (
    <div className={styles.card}>
      {/* 1. Image & Overlays */}
      <div className={styles.imageWrapper}>
        <Image
          src={astrologer.imageUrl}
          alt={astrologer.name}
          fill
          unoptimized
          className={styles.image}
        />
        {astrologer.badge && (
          <div className={styles.topBadge}>{astrologer.badge}</div>
        )}
        <div
          className={`${styles.statusBadge} ${isOnline ? styles.online : styles.busy}`}
        >
          <span className={styles.dot} />
          {isOnline ? "Online Now" : "In Session"}
        </div>
      </div>
      {/* 2. Info Area */}
      <div className={styles.infoArea}>
        <div className={styles.header}>
          <h3>{astrologer.name}</h3>
          <div className={styles.rating}>
            <Star className={styles.starIcon} fill="currentColor" />
            <span>{astrologer.rating}</span>
          </div>
        </div>
        <p className={styles.subtitle}>
          {astrologer.title} &bull; {astrologer.experienceYears} yrs exp
        </p>
        <div className={styles.specialties}>
          {astrologer.specialties.map((spec) => (
            <span key={spec} className={styles.pill}>
              {spec}
            </span>
          ))}
        </div>
        <p className={styles.languages}>
          Languages: {astrologer.languages.join(", ")}
        </p>
      </div>
      {/* 3. Footer / Actions */}
      <div className={styles.footer}>
        <div className={styles.priceInfo}>
          <span className={styles.label}>CONSULT FEE</span>
          <div className={styles.price}>
            <span className={styles.currency}>₹</span>
            <span className={styles.amount}>{astrologer.pricePerMin}</span>
            <span className={styles.unit}>/min</span>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Chat">
            <MessageSquare size={14} />
          </button>
          {isOnline ? (
            <button className={styles.primaryBtn}>
              <PhoneCall size={14} />
              CALL
            </button>
          ) : (
            <button className={styles.secondaryBtn}>
              <Bell size={14} />
              WAITLIST
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
