'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, Award } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: '7.4x',
    title: 'Productivity Increase',
    description: 'Boost your team\'s efficiency',
    iconBg: 'from-green-400 to-emerald-500',
  },
  {
    icon: Clock,
    value: '90%',
    title: 'Time Saved',
    description: 'On interview scheduling',
    iconBg: 'from-purple-400 to-violet-500',
  },
  {
    icon: Users,
    value: '10K+',
    title: 'Candidates Interviewed',
    description: 'Successfully processed',
    iconBg: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Award,
    value: '98%',
    title: 'Satisfaction Rate',
    description: 'From hiring managers',
    iconBg: 'from-orange-400 to-amber-500',
  },
]

const impactStats = [
  { value: '27%', label: 'fewer interviews', sublabel: 'per hire' },
  { value: '28%', label: 'increase in', sublabel: 'pipeline efficiency' },
  { value: '19%', label: 'reduction in', sublabel: 'candidate drop offs' },
]

export default function Stats() {
  return (
    <>
      {/* Light Theme Impact Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Delivering immediate impact for forward-
              <br />
              thinking talent acquisition teams.
            </h2>
            <p className="text-gray-500">
              *Based on a real study across 25,000+ candidates on the impact of SAM.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                  className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 mb-3"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">
                  {stat.label}
                  <br />
                  <span className="font-medium text-gray-800">{stat.sublabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Theme Numbers Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4"
            >
              BY THE NUMBERS
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Trusted by{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400">
                Industry Leaders
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our platform delivers measurable results that transform recruiting operations
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(99, 102, 241, 0.3)' }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 transition-all"
              >
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.iconBg} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Value */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>

                {/* Title */}
                <div className="text-white font-medium mb-1">{stat.title}</div>

                {/* Description */}
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
