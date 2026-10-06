import React from "react";
import { Music, Gem, Sparkles, Download, Phone } from "lucide-react";
import { VehicleHarmonizationProtocol } from "../../types/lucky-vehicle.types";
import styles from "./vehicle-harmonization.module.scss";

interface VehicleHarmonizationProps {
  protocols: VehicleHarmonizationProtocol[];
}

export const VehicleHarmonization: React.FC<VehicleHarmonizationProps> = ({ protocols }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case "mantra":
        return <Music size={20} />;
      case "yantra":
        return <Gem size={20} />;
      case "puja":
        return <Sparkles size={20} />;
      default:
        return <Sparkles size={20} />;
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>VAHAN SHANTI & REMEDIAL SHIELDING</div>
        <h2 className={styles.title}>Consecrated Vehicle Harmonization Protocols</h2>
        <div className={styles.subtitle}>
          Active deflective measures to counter highway doshas and maintain structural & aura endurance around the chassis.
        </div>
      </div>

      <div className={styles.grid}>
        {protocols.map((protocol) => (
          <div key={protocol.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.icon} ${protocol.id === "yantra" ? styles.cyan : ''}`}>
                {getIcon(protocol.id)}
              </div>
              <span className={styles.type}>{protocol.type}</span>
            </div>
            
            <h3 className={styles.cardTitle}>{protocol.title}</h3>
            <p className={styles.cardDesc}>{protocol.description}</p>
            
            <div className={styles.instructionBox}>
              <div className={styles.instructionText}>{protocol.instructions}</div>
            </div>
            
            <div className={styles.footerRow}>
              <span>{protocol.frequency}</span>
              <span className={styles.link}>Request Kit &rarr;</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.actionFooter}>
        <div className={styles.left}>
          <div className={styles.note}>Professional Automotive Consultation</div>
          <h3 className={styles.mainTitle}>Generate Automotive Astrometric Dossier</h3>
          <div className={styles.subDesc}>
            Obtain a full astrometric breakdown including 12-month transit accident avoidance calendar, engine break-in muhurta, and digital yantra certification.
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.btnSecondary}>
            <Download size={18} />
            Export Dossier Summary
          </button>
          <button className={styles.btnPrimary}>
            <Phone size={18} />
            Consult Vahan Jyotish Master
          </button>
        </div>
      </div>
    </div>
  );
};
