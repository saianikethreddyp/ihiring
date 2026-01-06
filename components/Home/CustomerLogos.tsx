'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Monster', color: '#6E4B9E' },
  { name: 'Workday', color: '#F5A623' },
  { name: 'Greenhouse', color: '#24A47F' },
  { name: 'Bullhorn', color: '#00A3E0' },
  { name: 'Ceipal', color: '#FF6B35' },
  { name: 'LinkedIn', color: '#0077B5' },
  { name: 'Indeed', color: '#2164F3' },
  { name: 'ZipRecruiter', color: '#5BA829' },
]

export default function CustomerLogos() {
  // Double the logos for seamless infinite scroll
  const doubledLogos = [...logos, ...logos]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 font-medium text-lg">
            Trusted integrations with leading platforms
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex items-center space-x-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {doubledLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.1 }}
            >
              <div
                className="h-14 px-8 rounded-xl flex items-center justify-center bg-gray-50 border border-gray-100 group-hover:border-gray-200 group-hover:shadow-lg transition-all duration-300"
                style={{ minWidth: '160px' }}
              >
                <span
                  className="font-bold text-xl text-gray-400 group-hover:text-current transition-colors duration-300"
                  style={{
                    color: undefined,
                  }}
                >
                  <span className="group-hover:hidden">{logo.name}</span>
                  <span
                    className="hidden group-hover:inline"
                    style={{ color: logo.color }}
                  >
                    {logo.name}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
