import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "ghost" | "outline";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  children: ReactNode;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-white hover:bg-teal-dark shadow-lg shadow-teal/25 hover:shadow-teal/40",
  ghost:
    "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
  outline:
    "bg-transparent text-teal border-2 border-teal hover:bg-teal hover:text-white",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
