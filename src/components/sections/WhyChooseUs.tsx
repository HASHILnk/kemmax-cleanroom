import {
  ShieldCheck,
  Award,
  Building2,
  Wrench,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { whyChooseUs } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { staggerContainer, staggerItem } from "../ui/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  award: Award,
  "building-2": Building2,
  wrench: Wrench,
  users: Users,
};

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          badge="Why KEMMAX"
          title="Why Choose Us"
          subtitle="The strengths that set us apart in clean room engineering."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div key={item.title} variants={staggerItem}>
                <div
                  className={`h-full rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                    item.highlighted
                      ? "bg-navy text-white glow-teal"
                      : "glass-light hover:glow-teal"
                  }`}
                >
                  <div
                    className={`mb-4 inline-flex rounded-xl p-3 ${
                      item.highlighted ? "bg-teal" : "bg-teal/10"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${item.highlighted ? "text-white" : "text-teal"}`}
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      item.highlighted ? "text-white/70" : "text-navy/60"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
