import Link from "next/link";
import {
  Shield,
  BadgeCheck,
  Lock,
  MessageCircle,
  Camera,
  Briefcase,
  Play,
} from "lucide-react";

import styles from "./FooterCorporate.module.scss";

export const FooterCorporate = () => {
  return (
    <div className={styles.corporateSection}>
      <div className={styles.column}>
        <h3>Corporate Info</h3>
        <ul className={styles.linkList}>
          <li>
            <Link href="#">Refund & Cancellation Policy</Link>
          </li>
          <li>
            <Link href="#">Terms & Conditions</Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Disclaimer</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Pricing Policy</Link>
          </li>
          <li>
            <Link href="#">Jyotishaastro Foundation</Link>
          </li>
          <li>
            <Link href="#">Jyotishaastro Reviews</Link>
          </li>
        </ul>
      </div>

      <div className={styles.column}>
        <h3>Astrologer</h3>
        <ul className={styles.linkList}>
          <li>
            <Link href="#">Astrologer Login</Link>
          </li>
          <li>
            <Link href="#">Astrologer Registration</Link>
          </li>
        </ul>

        <h3 className={styles.contactTitle}>Contact us</h3>
        <div className={styles.contactInfo}>
          <p>We are available 24x7 on chat support</p>
          <p>Email: contact@jyotishaastro.com</p>
        </div>
      </div>

      <div className={styles.column}>
        <h3>Secure</h3>
        <div className={styles.secureList}>
          <div className={styles.secureBadge}>
            <div className={styles.iconBox}>
              <Lock size={20} />
            </div>
            <span>Private & Confidential</span>
          </div>
          <div className={styles.secureBadge}>
            <div className={styles.iconBox}>
              <BadgeCheck size={20} />
            </div>
            <span>Verified Astrologers</span>
          </div>
          <div className={styles.secureBadge}>
            <div className={styles.iconBox}>
              <Shield size={20} />
            </div>
            <span>Secure Payments</span>
          </div>
        </div>

        <div className={styles.socialBox}>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <MessageCircle size={18} />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <Camera size={18} />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
            <Briefcase size={18} />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="YouTube">
            <Play size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};
