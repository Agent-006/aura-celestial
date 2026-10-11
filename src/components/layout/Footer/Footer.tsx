import { FooterBrand } from "./components/FooterBrand/FooterBrand";
import { FooterNewsletter } from "./components/FooterNewsletter/FooterNewsletter";
import { FooterLinkGrid } from "./components/FooterLinkGrid/FooterLinkGrid";
import { FooterFeatures } from "./components/FooterFeatures/FooterFeatures";
import { FooterLegal } from "./components/FooterLegal/FooterLegal";
import { FooterCorporate } from "./components/FooterCorporate/FooterCorporate";
import { FooterBackground } from "./components/FooterBackground/FooterBackground";
import { FooterTelemetry } from "./components/FooterTelemetry/FooterTelemetry";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterBackground />
      <div className={styles.container}>
        {/* Top dashboard panel groups Brand and Newsletter */}
        <div className={styles.dashboardPanel}>
          <FooterBrand />
          <FooterNewsletter />
        </div>

        <FooterLinkGrid />

        <FooterCorporate />

        {/* <FooterFeatures /> */}

        {/* <FooterTelemetry /> */}

        <FooterLegal />
      </div>
    </footer>
  );
};
