import React from "react";
import {
  Users,
  MessagesSquare,
  Network,
  Heart,
  BrainCircuit,
  TreePine,
} from "lucide-react";
import { PlatonicDimension } from "../../types/friendship.types";
import styles from "./platonic-dimensions.module.scss";

interface PlatonicDimensionsProps {
  dimensions: PlatonicDimension[];
}

export const PlatonicDimensions: React.FC<PlatonicDimensionsProps> = ({
  dimensions,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case "labha":
        return <Users size={20} />;
      case "sahaja":
        return <MessagesSquare size={20} />;
      case "planetary":
        return <Network size={20} />;
      case "emotional":
        return <Heart size={20} />;
      case "humor":
        return <BrainCircuit size={20} />;
      case "dharmic":
        return <TreePine size={20} />;
      default:
        return <Users size={20} />;
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>COMPREHENSIVE TELEMETRY</div>
        <h2 className={styles.title}>
          The 6 Dimensions of Platonic Concordance
        </h2>
        <div className={styles.subtitle}>
          Harmonization factors split into multi-house synastry mapping,
          influenced by 11th House aspects, Naisargika Mitra, and Jupiterian
          alignments.
        </div>
      </div>

      <div className={styles.grid}>
        {dimensions.map((dim, idx) => (
          <div key={dim.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.icon}>{getIcon(dim.id)}</div>
              <div className={styles.subtitle}>{dim.subtitle}</div>
            </div>

            <h3 className={styles.cardTitle}>{dim.title}</h3>
            <p className={styles.cardDesc}>{dim.description}</p>

            <div className={styles.footerRow}>
              <span>Status Level</span>
              <span
                className={`${styles.status} ${idx % 2 === 0 ? styles.gold : styles.cyan}`}
              >
                {dim.percentage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
