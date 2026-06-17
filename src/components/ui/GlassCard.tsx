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
      className={`rounded-2xl p-6 ${variantClasses[variant]} ${hover ? "transition-all duration-300 hover:scale-[1.02] hover:glow-teal" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
