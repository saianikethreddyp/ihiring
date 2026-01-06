'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Star, Sparkles } from 'lucide-react'

// Team avatars for display
const teamAvatars = [
  { bg: 'from-teal-400 to-cyan-500' },
  { bg: 'from-blue-400 to-indigo-500' },
  { bg: 'from-purple-400 to-pink-500' },
  { bg: 'from-orange-400 to-red-500' },
]

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Testimonial + Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {/* Testimonial Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-3xl p-8 overflow-hidden"
          >
            {/* Wave Pattern Background */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <path d="M0,100 Q100,50 200,100 T400,100 V300 H0 Z" fill="rgba(255,255,255,0.1)" />
                <path d="M0,150 Q100,100 200,150 T400,150 V300 H0 Z" fill="rgba(255,255,255,0.1)" />
                <path d="M0,200 Q100,150 200,200 T400,200 V300 H0 Z" fill="rgba(255,255,255,0.1)" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-200 to-blue-300 border-2 border-white/50 flex items-center justify-center text-2xl shadow-lg"
                >
                  👨‍💼
                </motion.div>
              </div>

              {/* Quote */}
              <blockquote className="text-white text-xl md:text-2xl font-medium italic text-center leading-relaxed mb-6">
                "ihiring offers the most compelling technology I've ever seen for making better hiring decisions."
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <p className="text-white font-semibold">Sarah Johnson</p>
                <p className="text-white/70 text-sm">VP of Talent, Fortune 500 Company</p>
              </div>
            </div>
          </motion.div>

          {/* Demo Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Ready to see it in action?
            </h3>
            <p className="text-gray-600 mb-6">
              Leading talent teams give ihiring{' '}
              <span className="text-yellow-500 font-semibold inline-flex items-center gap-1">
                4.9 stars <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </span>
              {' '}on G2
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors mb-6"
              >
                <span>Book live demo</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Team Avatars */}
            <div className="flex -space-x-3">
              {teamAvatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatar.bg} border-2 border-white shadow-md flex items-center justify-center text-lg`}
                >
                  {['👩‍💼', '👨‍💻', '👩‍🔬', '👨‍💼'][index]}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Full-Width CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 md:p-16 overflow-hidden text-center"
        >
          {/* Animated Background Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-30"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30"
          />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-medium">Start Your Free Trial</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Ready to Transform Your
              <br />
              Hiring Process?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Join thousands of companies using SAM to hire faster, smarter, and more efficiently. Get started with a personalized demo today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <span>Get a Demo</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
                >
                  <span>View Pricing</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm"
            >
              {[
                'No credit card required',
                '14-day free trial',
                'Cancel anytime',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-white/80" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
