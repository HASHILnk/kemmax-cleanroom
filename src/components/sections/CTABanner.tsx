import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cta } from "../../data/content";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";

export function CTABanner() {
  const { scrollYProgress } = useScroll();
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <div className="overflow-hidden rounded-3xl border border-teal/20 bg-navy shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden lg:h-auto">
                <motion.img
                  style={{ scale: imgScale }}
                  src={cta.image}
                  alt="Engineering excellence"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/80 lg:bg-gradient-to-r lg:from-transparent lg:to-navy" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-display text-3xl font-bold leading-tight text-white md:text-4xl"
                >
                  {cta.headline}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mt-4 text-lg text-white/70"
                >
                  {cta.message}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8"
                >
                  <Link to="/contact">
                    <Button variant="primary" className="px-8 py-4">
                      {cta.button}
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
