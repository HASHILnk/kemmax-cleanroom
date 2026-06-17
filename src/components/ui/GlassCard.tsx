import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type GlassVariant = "dark" | "light" | "teal";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: GlassVariant;
  hover?: boolean;
}

const variantClasses: Record<GlassVariant, string> = {
  dark: "glass",
  light: "glass-light",
  teal: "glass-teal",
};

export function GlassCard({
  children,
  variant = "light",
  hover = true,
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-2xl p-6 ${variantClasses[variant]} ${hover ? "hover:glow-teal" : ""} ${className}`}
      whileHover={hover ? { scale: 1.03, y: -3 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
