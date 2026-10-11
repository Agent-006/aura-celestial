import React from "react";
import { Metadata } from "next";
import { BlogListingView } from "@/features/blog/components/BlogListingView/BlogListingView";

export const metadata: Metadata = {
  title: "The Sidereal Journal - Aura Celestial",
  description:
    "Where High Science Meets Vedic Wisdom. Read our latest peer-reviewed field monographs and observations.",
};

export default function BlogListingPage() {
  return (
    <main>
      <BlogListingView />
    </main>
  );
}
