import { CheckCircle } from "lucide-react";
import { companyIntro } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

export function CompanyIntro() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          badge="About KEMMAX"
          title={companyIntro.title}
          subtitle={companyIntro.description}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd87a?w=800&q=80"
                alt="Clean room facility"
                className="h-80 w-full object-cover lg:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-xl glass-light px-6 py-4">
                <div className="font-display text-3xl font-bold text-teal">
                  15+
                </div>
                <div className="text-sm text-navy/60">Years of Excellence</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              {companyIntro.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <span className="text-navy/80">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
