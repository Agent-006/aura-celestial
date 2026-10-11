import React from "react";
import styles from "./blog-grid.module.scss";
import { BlogPost } from "../../types";
import { User, BookOpen } from "lucide-react";
import Link from "next/link";

interface BlogGridProps {
  posts: BlogPost[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map((post, index) => (
        <div key={post.id} className={styles.gridCard}>
          <div className={styles.imageContainer}>
            {/* Fallback to CSS gradient if no image */}
            <div className={styles.imageOverlay}></div>
            <div className={styles.readTimeBadge}>{post.readTime}</div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardMeta}>TREATISE NO. 14{6 - index}</div>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.cardFooter}>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <User size={12} />
                </div>
                <span>{post.author}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className={styles.readLink}>
                Study Monograph ➔
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
