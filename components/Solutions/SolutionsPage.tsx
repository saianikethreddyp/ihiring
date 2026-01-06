'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Target, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    icon: Building2,
    title: 'For Enterprises',
    description: 'Scale your hiring process with enterprise-grade AI recruitment solutions',
    features: [
      'High-volume candidate screening',
      'Custom integration with existing ATS',
      'Dedicated account management',
      'Advanced analytics and reporting',
      'White-glove onboarding',
      '24/7 support',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'For Staffing Agencies',
    description: 'Streamline operations and place more candidates faster with AI-powered tools',
    features: [
      'Multi-client management',
      'Rapid candidate placement',
      'Automated scheduling',
      'Client-specific workflows',
      'Performance tracking',
      'Revenue optimization',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Target,
    title: 'For Recruitment Teams',
    description: 'Empower your team to focus on what matters most - building relationships',
    features: [
      'Reduce time-to-hire',
      'Improve candidate experience',
      'Data-driven decisions',
      'Team productivity tools',
      'Quality over quantity',
      'Scalable processes',
    ],
    color: 'from-teal-500 to-teal-600',
  },
]

const useCases = [
  {
    title: 'High-Volume Hiring',
    description: 'Screen thousands of candidates efficiently',
  },
  {
    title: 'Technical Roles',
    description: 'Deep technical assessments with SAM',
  },
  {
    title: 'Cultural Fit',
    description: 'Evaluate soft skills and team compatibility',
  },
  {
    title: 'Remote Hiring',
    description: 'Seamless remote interview experience',
  },
]

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Solutions for Every{' '}
              <span className="gradient-text">Recruitment Need</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're an enterprise, staffing agency, or growing team, ihiring has the solution for you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">{solution.title}</h2>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Perfect for Every <span className="text-primary-blue">Use Case</span>
            </h2>
            <p className="text-xl text-gray-600">
              From high-volume hiring to specialized roles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-blue to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find the Perfect Solution for Your Team
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how ihiring can meet your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center space-x-2 bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <span>Schedule a Demo</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              >
                <span>Contact Sales</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

