import React from "react";
import styles from "./blog-list.module.scss";
import { BlogPost } from "../../types";
import { Bookmark, FileText } from "lucide-react";
import Link from "next/link";

interface BlogListProps {
  posts: BlogPost[];
}

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listWrapper}>
        {posts.map((post, index) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className={styles.listItem}
          >
            <div className={styles.iconBox}>
              {index % 2 === 0 ? (
                <FileText size={16} />
              ) : (
                <Bookmark size={16} />
              )}
            </div>

            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.separator}>—</span>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.separator}>—</span>
                {post.tags?.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={styles.title}>{post.title}</h3>
            </div>

            <div className={styles.footer}>
              <span className={styles.author}>{post.author}</span>
              <span className={styles.readTime}>{post.readTime}</span>
              <div className={styles.actionIcon}>⬎</div>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.pagination}>
        <div className={styles.showing}>
          SHOWING 1-10 OF 48 REFERENCE MONOGRAPHS
        </div>
        <div className={styles.controls}>
          <button className={styles.pageBtn}>[ PREV EPOCH ]</button>
          <div className={styles.pages}>
            <button className={`${styles.pageNumber} ${styles.active}`}>
              1
            </button>
            <button className={styles.pageNumber}>2</button>
            <button className={styles.pageNumber}>3</button>
            <button className={styles.pageNumber}>4</button>
          </div>
          <button className={styles.pageBtn}>[ NEXT EPOCH ]</button>
        </div>
      </div>
    </div>
  );
};
