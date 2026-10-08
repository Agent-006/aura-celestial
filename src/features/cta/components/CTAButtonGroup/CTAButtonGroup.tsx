import { Button } from "@/components/ui/Button/Button";
import styles from "./CTAButtonGroup.module.scss";

export const CTAButtonGroup = () => {
  return (
    <div className={styles.buttonGroup}>
      <Button variant="glow" size="lg">
        CLAIM 5 FREE MINUTES NOW
      </Button>
      <Button variant="outline" size="lg">
        GENERATE FREE JANAM KUNDLI
      </Button>
    </div>
  );
};
