import React from "react";
import styles from "./blog-hero.module.scss";
import { BlogPost } from "../../types";
import { User, Calendar, BookOpen, Download } from "lucide-react";

interface BlogHeroProps {
  post: BlogPost;
}

export const BlogHero: React.FC<BlogHeroProps> = ({ post }) => {
  return (
    <div className={styles.heroCard}>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.separator}>/</span>
          {post.tags?.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.authorMeta}>
          <div className={styles.avatar}>
            <User size={16} />
          </div>
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>{post.author}</span>
            <span className={styles.authorRole}>
              Senior Research Fellow, Sidereal Mission
            </span>
          </div>
          <div className={styles.dateMeta}>
            <span className={styles.iconText}>
              <Calendar size={14} /> {post.date}
            </span>
            <span className={styles.iconText}>
              <BookOpen size={14} /> {post.readTime}
            </span>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryBtn}>
            Read Complete Monograph ➔
          </button>
          <button className={styles.secondaryBtn}>
            <Download size={14} /> Download Ephemeris PDF (1.2 MB)
          </button>
        </div>
      </div>

      <div className={styles.visualizer}>
        <div className={styles.hudTop}>
          <span>ORBITAL TRACKER: PROJECTED MATRIX</span>
          <span className={styles.highlight}>RESONANCE INTERVAL: D150</span>
        </div>

        <div className={styles.orbitContainer}>
          {/* Mockup visual elements using CSS */}
          <div className={styles.sun}></div>
          <div className={styles.orbit1}></div>
          <div className={styles.orbit2}>
            <div className={styles.planet}></div>
          </div>
          <div className={styles.axis}></div>
        </div>

        <div className={styles.hudBottom}>
          <div className={styles.hudLeft}>
            <div>Sidereal Longitude</div>
            <div>Declination (Equatorial)</div>
            <div>Planetary Node</div>
            <div>Karakamsa Resonance</div>
          </div>
          <div className={styles.hudRight}>
            <div>314° 28&lsquo; 11.2&quot;</div>
            <div>-16° 32&lsquo; 14&quot; South</div>
            <div>Purva Bhadrapada (Pada 1 - Aries)</div>
            <div>Macro-structural Potential</div>
          </div>
        </div>

        <div className={styles.footerRef}>
          <span className={styles.dot}></span> Associated with Lahiri Ayanamsha
          <span className={styles.refId}>REF: MONO-2025-04</span>
        </div>
      </div>
    </div>
  );
};
