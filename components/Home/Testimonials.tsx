'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Haig Schmidt',
    role: 'Level III Data Engineer',
    company: 'Tech Corp',
    content: 'The interview with SAM was incredibly professional and thorough. It felt like talking to an experienced interviewer who truly understood the technical requirements.',
    rating: 5,
  },
  {
    name: 'Taylor',
    role: 'Senior Fullstack Engineer',
    company: 'StartupX',
    content: 'I was impressed by how natural the conversation felt. SAM asked relevant follow-up questions and made the process stress-free.',
    rating: 5,
  },
  {
    name: 'Dominic Z.T.',
    role: 'Level II DevOps Engineer',
    company: 'Cloud Systems',
    content: 'Modern and forward-thinking approach to interviewing. The scheduling was seamless and the interview itself was very well-structured.',
    rating: 5,
  },
  {
    name: 'Miller',
    role: 'Entry-Level Business Analyst',
    company: 'Finance Co',
    content: 'As someone new to the industry, I appreciated how comfortable SAM made me feel. The questions were challenging but fair.',
    rating: 5,
  },
  {
    name: 'Nicole Meyer',
    role: 'Data Analyst',
    company: 'Analytics Inc',
    content: 'The efficiency of the process was remarkable. From scheduling to receiving feedback, everything was incredibly fast and professional.',
    rating: 5,
  },
  {
    name: 'Chris',
    role: 'AML Engineer',
    company: 'FinTech Pro',
    content: 'SAM respected my time and conducted a focused, relevant interview. The technical assessment was spot-on for the role.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Candidates <span className="gradient-text">Love</span> SAM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what candidates say about their interview experience with our AI interviewer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="premium-card rounded-2xl p-8 relative group"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0.2 }}
                whileHover={{ opacity: 0.4, scale: 1.1 }}
                className="absolute top-6 right-6"
              >
                <Quote className="w-10 h-10 text-primary-blue/20" />
              </motion.div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-accent-purple flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
