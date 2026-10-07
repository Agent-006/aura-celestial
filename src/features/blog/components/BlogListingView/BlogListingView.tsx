import React from "react";
import styles from "./blog-listing.module.scss";
import { BlogHero } from "../BlogHero/BlogHero";
import { BlogFilterBar } from "../BlogFilterBar/BlogFilterBar";
import { BlogGrid } from "../BlogGrid/BlogGrid";
import { BlogList } from "../BlogList/BlogList";
import { NewsletterCTA } from "../NewsletterCTA/NewsletterCTA";
import { FEATURED_POST, GRID_POSTS, LIST_POSTS } from "../../data/mock-posts";

export const BlogListingView = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.breadcrumbs}>
            <span>OBSERVATORY MONOGRAPHS</span> / <span>VOLUME VII</span> /{" "}
            <span>SIDEREAL FIELD DISPATCHES</span>
          </div>
          <h1 className={styles.title}>The Sidereal Journal</h1>
          <p className={styles.subtitle}>
            Where High Science Meets Vedic Wisdom
          </p>
        </div>
        <div className={styles.headerStats}>
          <div className={styles.statLine}>
            CURRENT SIDEREAL AYANAMSHA
            <br />
            <strong>LAHIRI: 24° 11&apos; 42.61&quot;</strong>
          </div>
          <div className={styles.statLine}>
            MEAN OBLIQUITY: 23° 26&apos; 11.4&quot;
          </div>
        </div>
      </header>

      <section className={styles.heroSection}>
        <BlogHero post={FEATURED_POST} />
      </section>

      <section className={styles.filterSection}>
        <BlogFilterBar />
      </section>

      <section className={styles.gridSection}>
        <div className={styles.sectionHeader}>
          <h2>Peer-Reviewed Field Monographs</h2>
          <div className={styles.sectionMeta}>
            EDITION 24.05 / THEORETICAL ASTROPHYSICS & CHRONOMETRY
          </div>
        </div>
        <p className={styles.sectionDesc}>
          Exhaustive analytical treatments combining traditional Parashari,
          Jaimini, and Bhrigu methodologies with contemporary precision
          chronometry.
        </p>
        <BlogGrid posts={GRID_POSTS} />
      </section>

      <section className={styles.listSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitleWithBadge}>
            <span className={styles.badge}>ARCHIVAL CHRONICLES</span>
            <h2>Recent Observations & Field Notes</h2>
          </div>
          <div className={styles.sectionMeta}>SORTED BY JULIAN DAY EPOCH ⬇</div>
        </div>
        <BlogList posts={LIST_POSTS} />
      </section>

      <section className={styles.newsletterSection}>
        <NewsletterCTA />
      </section>
    </div>
  );
};
