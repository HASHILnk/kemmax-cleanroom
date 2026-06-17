import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { allProducts, productCategories, company } from "../data/content";
import { SectionHeader } from "../components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "../components/ui/ScrollReveal";

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

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
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/70"
          >
            Engineered solutions for critical clean room environments by{" "}
            {company.name}.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader
            badge="Catalog"
            title="Product Range"
            subtitle="Browse our comprehensive range of clean room products and services."
          />

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {productCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-teal text-white shadow-lg shadow-teal/25"
                    : "bg-surface text-navy/60 hover:bg-teal/10 hover:text-teal"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  variants={staggerItem}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-navy/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal/10">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-bold text-navy">
                        {product.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">
                        {product.description}
                      </p>
                      <Link
                        to="/contact"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
                      >
                        Enquire Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
