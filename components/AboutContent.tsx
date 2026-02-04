'use client';

import { motion } from 'framer-motion';
import { Quote, TrendingUp, Users, Target, Rocket } from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.15 } },
};

export function AboutContent() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 overflow-hidden -mt-16 pt-16">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 pt-24 pb-8">
        {/* Background Gradients - Adjusted for Light Mode */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fire-red/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-100 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-fire-red/10 text-fire-red font-mono text-xs mb-3 font-bold">
              EST. 2026
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight text-neutral-900">
              Redefining <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-red to-orange-600">Real Estate Intelligence</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
              XPropTech is the convergence of concrete infrastructure and digital innovation. We are building the ecosystem where the future of authentic property technology lives.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. VISION & VALUES */}
      <section className="py-8 px-4 relative bg-neutral-50/50">
        <div className="max-w-[95%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Rocket, title: "Innovation", desc: "Pushing boundaries with AI, Blockchain, and IoT integration in real estate." },
              { icon: Users, title: "Community", desc: "Uniting founders, investors, and developers in a singular powerful network." },
              { icon: Target, title: "Impact", desc: "Creating tangible value and solving real-world friction in property transactions." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-6 rounded-3xl bg-white border border-fire-red/20 shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_-5px_rgba(220,38,38,0.5)] hover:border-fire-red/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-fire-red/10 flex items-center justify-center text-fire-red mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Image Side */}
            <div className="md:col-span-4 relative group">
              <div className="absolute inset-0 bg-fire-red blur-[60px] opacity-10 rounded-full group-hover:opacity-20 transition-opacity" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl">
                <Image
                  src="/anuupic.jpeg"
                  alt="Anurag Dubey"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="md:col-span-8 space-y-5">
              <div>
                <span className="text-fire-red font-bold tracking-widest uppercase text-xs mb-1 block">The Visionary</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-neutral-900">Anurag Dubey</h2>
                <h3 className="text-lg text-neutral-500 font-light mb-5">Founder & CEO, XPropTech</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-fire-red">
                <Quote className="absolute -top-2 -left-3 bg-white text-fire-red p-1" size={20} />
                <p className="text-lg text-neutral-700 italic leading-relaxed">
                  "We aren't just building a platform; we are architecting the digital backbone of Indian Real Estate. XPropTech is born from the belief that technology shouldn't just support property—it should propel it."
                </p>
              </div>

              <div className="prose text-neutral-600 text-sm">
                <p>
                  With a relentless passion for innovation and a deep understanding of the market's pulse, Anurag envisioned XPropTech as more than a company—it's a movement. His leadership focuses on bridging the gap between traditional real estate wisdom and new-age digital agility.
                </p>
              </div>

              <div className="pt-3">
                <motion.a
                  href="https://www.linkedin.com/company/xproptech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 bg-fire-red text-white font-bold rounded-xl shadow-[0_4px_20px_-5px_rgba(220,38,38,0.4)] hover:bg-red-700 transition-colors text-sm"
                >
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. STATISTICS/FOOTER CONNECT - Inverted for light theme */}
      <section className="py-8 px-4 text-center border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-neutral-900">Building for the Future</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Founded", val: "2026" },
              { label: "Cities", val: "2" },
              { label: "Mission", val: "Alpha" },
              { label: "Focus", val: "PropTech" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-fire-red mb-1">{stat.val}</div>
                <div className="text-neutral-500 uppercase text-[10px] tracking-wider font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
