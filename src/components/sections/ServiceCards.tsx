import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/content";
import { staggerContainer, staggerItem } from "../ui/ScrollReveal";

export function ServiceCards() {
  return (
    <section className="relative z-20 -mt-24 pb-8 md:-mt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <Link to={service.path} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-teal p-6 shadow-xl shadow-teal/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-teal/30">
                  <div className="relative z-10">
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      {service.subtitle}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/90">
                      Learn More
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 h-32 w-32 overflow-hidden rounded-xl opacity-30 transition-opacity group-hover:opacity-50">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -right-2 -bottom-16 hidden h-40 w-40 overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 md:block">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
