import {
  Scale,
  Crosshair,
  Lightbulb,
  HardHat,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { about, industries, company } from "../data/content";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ScrollReveal, staggerContainer, staggerItem } from "../components/ui/ScrollReveal";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { CTABanner } from "../components/sections/CTABanner";

const valueIconMap: Record<string, LucideIcon> = {
  scale: Scale,
  crosshair: Crosshair,
  lightbulb: Lightbulb,
  "hard-hat": HardHat,
  handshake: Handshake,
};

export function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,158,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-white md:text-5xl"
          >
            About {company.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/70"
          >
            {company.legalName} — Engineering controlled environments since{" "}
            {company.yearEstablished}.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader badge="Our Story" title="Company Overview" />
          <div className="mx-auto max-w-4xl space-y-6">
            {about.overview.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-navy/70">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {about.stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-2xl glass-light p-8 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal">
                  Our Vision
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                  Looking Forward
                </h3>
                <p className="mt-4 leading-relaxed text-navy/70">
                  {about.vision}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl bg-teal p-8 text-white md:p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Our Mission
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  What Drives Us
                </h3>
                <p className="mt-4 leading-relaxed text-white/80">
                  {about.mission}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader
            badge="Values"
            title="Core Values"
            subtitle="The principles that guide every project we undertake."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
          >
            {about.values.map((value) => {
              const Icon = valueIconMap[value.icon] || Scale;
              return (
                <motion.div key={value.title} variants={staggerItem}>
                  <div className="h-full rounded-2xl bg-white p-6 text-center shadow-lg shadow-navy/5 transition-all hover:-translate-y-1 hover:shadow-teal/10">
                    <div className="mx-auto mb-4 inline-flex rounded-xl bg-teal/10 p-3">
                      <Icon className="h-6 w-6 text-teal" />
                    </div>
                    <h3 className="font-display font-bold text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-navy/60">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader
            badge="Expertise"
            title="Industry Expertise"
            subtitle="Specialized clean room solutions tailored to each sector's unique requirements."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.name} delay={i * 0.08}>
                <div className="rounded-2xl glass-light p-6 transition-all hover:glow-teal">
                  <h3 className="font-display text-lg font-bold text-navy">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">
                    {industry.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
