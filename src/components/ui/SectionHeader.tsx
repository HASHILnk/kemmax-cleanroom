import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal">
          {badge}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base md:text-lg ${light ? "text-white/70" : "text-navy/60"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
