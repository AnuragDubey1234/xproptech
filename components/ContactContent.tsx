'use client';

import { motion } from 'framer-motion';

export function ContactContent() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Send Message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-transform focus:scale-[1.01]" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-transform focus:scale-[1.01]" />
            <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>General</option>
              <option>Partnership</option>
              <option>Startup Submission</option>
              <option>Media</option>
            </select>
            <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none transition-transform focus:scale-[1.01]" />
            <motion.button type="submit" className="w-full py-4 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Send Message</motion.button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <motion.div whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Location</h3>
            <motion.div
              className="aspect-video rounded-3xl bg-primary-100 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center p-6">
                <p className="font-semibold text-neutral-700">HQ: Koregaon Park</p>
                <p className="text-neutral-700">Pune, Maharashtra, India</p>
                <a href="https://maps.google.com/?q=Koregaon+Park+Pune" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-primary-600 hover:underline">View on Map →</a>
              </div>
            </motion.div>
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-neutral-700">
              <li><a href="mailto:Team@xproptech.in" className="hover:text-primary-500 transition-colors">Team@xproptech.in</a></li>
              <li><a href="tel:+917777777777" className="hover:text-primary-500 transition-colors">+91 7777777777</a></li>
            </ul>
          </div>
          <motion.div className="glass-card rounded-3xl p-6" whileHover={{ scale: 1.02 }}>
            <p className="text-neutral-700 text-center">
              <span className="font-bold text-primary-600">500+</span> connections made |               <span className="font-bold text-primary-600">2,500+</span> community members
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
