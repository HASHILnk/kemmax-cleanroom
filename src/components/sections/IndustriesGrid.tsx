import {
  Pill,
  Cpu,
  Car,
  HeartPulse,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { industries } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

const iconMap: Record<string, LucideIcon> = {
  pill: Pill,
  cpu: Cpu,
  car: Car,
  "heart-pulse": HeartPulse,
  stethoscope: Stethoscope,
};

export function IndustriesGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          badge="Industries"
          title="Sectors We Serve"
          subtitle="Delivering precision-controlled environments across diverse industries that demand the highest standards."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] || Pill;
            return (
              <motion.div key={industry.name} variants={staggerItem}>
                <div className="group overflow-hidden rounded-2xl glass-light transition-all duration-300 hover:scale-[1.02] hover:glow-teal">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="rounded-lg bg-teal p-2">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-navy/60">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
