"use client";

import styles from "./astrologer-filters.module.scss";

interface AstrologerFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function AstrologerFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: AstrologerFiltersProps) {
  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.scrollContainer}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.tab} ${activeCategory === category ? styles.active : ""}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
