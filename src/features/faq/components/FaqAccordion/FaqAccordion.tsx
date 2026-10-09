"use client";
import { useState } from "react";
import { FaqItem } from "../../types";
import styles from "./faq-accordion.module.scss";

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <div 
            key={item.id} 
            className={`${styles.item} ${isExpanded ? styles.expanded : ""}`}
          >
            <button
              className={styles.trigger}
              onClick={() => toggle(item.id)}
              aria-expanded={isExpanded}
            >
              <span className={styles.question}>{item.question}</span>
              <span className={styles.iconWrapper}>
                {isExpanded ? (
                  <span className={styles.iconClose}>×</span>
                ) : (
                  <span className={styles.iconOpen}>+</span>
                )}
              </span>
            </button>
            <div className={styles.contentWrapper}>
              <div className={styles.content}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
