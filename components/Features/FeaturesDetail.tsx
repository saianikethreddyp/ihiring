'use client'

import { motion } from 'framer-motion'
import { FileSearch, Calendar, MessageSquare, FileText, Link as LinkIcon, Check, Zap, Shield, BarChart3 } from 'lucide-react'
import Link from 'next/link'

const detailedFeatures = [
  {
    icon: FileSearch,
    title: 'ONE: Resume Screening',
    description: 'Our proprietary algorithm screens each applicant\'s resume, sorts and provides audited reports based on defined criteria.',
    benefits: [
      'Automated resume parsing',
      'AI-powered candidate ranking',
      'Customizable screening criteria',
      'Audited reports with insights',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Calendar,
    title: 'TWO: 24/7 Auto Scheduling',
    description: 'Automatically sends emails/notifications to candidates to schedule interviews utilizing our smart calendar system or you can send schedule the date and time.',
    benefits: [
      'Round-the-clock availability',
      'Smart calendar integration',
      'Automatic reminders',
      'Flexible scheduling options',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: MessageSquare,
    title: 'THREE: Interview by Human-Like AI Agent "SAM" with Phase Flexibility',
    description: 'Conducts multiple 1:1 advanced screening & panel style interviews simultaneously, evaluates in-depth technical and non-technical, cultural and soft skills to advance top candidates forward.',
    benefits: [
      '1:1 and panel interviews',
      'Technical skills assessment',
      'Cultural fit evaluation',
      'Soft skills analysis',
      'Multi-phase flexibility',
    ],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: FileText,
    title: 'FOUR: Detailed Interview Report',
    description: 'Provides detailed interview reports along with proctors, interview video streaming after each stage of interview, enables quick, informed decisions in ihiring\'s ATS or clients platform.',
    benefits: [
      'Comprehensive reports',
      'Video streaming access',
      'Proctoring information',
      'ATS integration ready',
    ],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: LinkIcon,
    title: 'FIVE: Integration ↔ ATS',
    description: 'Integrates with clients existing platforms and ATS (Monster, Workday, Greenhouse, Bullhorn, Ceipal and more).',
    benefits: [
      'Seamless ATS integration',
      'Multiple platform support',
      'Real-time data sync',
      'Custom integrations available',
    ],
    color: 'from-indigo-500 to-indigo-600',
  },
]

const additionalFeatures = [
  {
    icon: Zap,
    title: 'Smart Proctoring',
    description: 'Real-time cheating detection system ensures interview integrity',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with advanced security measures',
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    description: 'Data-driven analytics to optimize your hiring process',
  },
]

export default function FeaturesDetail() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powerful Features for{' '}
              <span className="gradient-text">Modern Recruitment</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how ihiring's comprehensive ATS SaaS Platform transforms your hiring process
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {detailedFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-xl`}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start space-x-3">
                          <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${index % 2 === 1 ? 'md:order-1' : ''} bg-gradient-to-br ${feature.color} rounded-2xl p-12 h-full flex items-center justify-center shadow-2xl`}
                  >
                    <div className="text-white text-center">
                      <Icon className="w-32 h-32 mx-auto mb-6 opacity-80" />
                      <div className="text-6xl font-bold opacity-50">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Additional <span className="text-primary-blue">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600">
              More features to enhance your recruitment process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-blue to-accent-purple flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-blue to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how ihiring can transform your recruitment process
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center space-x-2 bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <span>Get a Demo</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

