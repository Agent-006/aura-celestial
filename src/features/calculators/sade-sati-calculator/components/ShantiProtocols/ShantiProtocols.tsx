"use client";
import React from "react";
import { Music, Gift, Droplets, Shield, Download, LucideIcon } from "lucide-react";
import { useSadeSatiTelemetry } from "../../hooks/useSadeSatiTelemetry";
import styles from "./shanti-protocols.module.scss";

const IconMap: Record<string, LucideIcon> = {
  music: Music,
  gift: Gift,
  droplets: Droplets,
  shield: Shield,
};

export function ShantiProtocols() {
  const { data, isLoading } = useSadeSatiTelemetry();

  if (isLoading || !data) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Consecrated Shani Shanti Protocols</h2>
        <p className={styles.subtitle}>
          As Saturn restricts and disciplines, these protocols align your
          consciousness with planetary realities, drastically mitigating Sade
          Sati and Dhaiya afflictions.
        </p>
      </div>
      <div className={styles.grid}>
        {data.protocols.map((protocol) => {
          const IconComp = IconMap[protocol.iconName] || Shield;

          return (
            <div key={protocol.id} className={styles.protocolCard}>
              <div className={styles.iconWrapper}>
                <IconComp size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.title}>{protocol.title}</h3>
              <span className={styles.subtitle}>{protocol.subtitle}</span>
              <p className={styles.desc}>{protocol.description}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.actionRow}>
        <button className={styles.downloadBtn}>
          <Download size={18} />
          Download Aura&apos;s 21-Day Shanti Recovery Docket
        </button>
      </div>
    </section>
  );
}
