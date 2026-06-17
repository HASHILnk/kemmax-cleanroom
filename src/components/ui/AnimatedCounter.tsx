import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  const numericMatch = value.match(/(\d+)/);
  const prefix = value.split(/\d/)[0] || "";
  const suffix = value.replace(/[\d+]/g, "").replace(prefix, "") || value.replace(/\d+/g, "");
  const target = numericMatch ? parseInt(numericMatch[1], 10) : null;

  useEffect(() => {
    if (!isInView || target === null) {
      if (isInView) setDisplay(value);
      return;
    }

    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setDisplay(`${prefix}${target}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${prefix}${Math.floor(start)}${suffix}`);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, prefix, suffix, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-3xl font-bold text-teal md:text-4xl">
        {target !== null ? display : value}
      </div>
      <div className="mt-1 text-sm text-navy/60">{label}</div>
    </motion.div>
  );
}
