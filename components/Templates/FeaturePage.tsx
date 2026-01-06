'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

interface Feature {
    title: string
    description: string
    icon: any
}

interface FeaturePageProps {
    title: string
    subtitle: string
    description: string
    icon: any
    visual: React.ReactNode
    features: Feature[]
    badge?: string
}

export default function FeaturePage({ title, subtitle, description, icon: Icon, visual, features, badge }: FeaturePageProps) {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center mb-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold">
                                <Icon size={16} />
                                <span>{subtitle}</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6"
                        >
                            {title} {badge && <span className="align-top text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full ml-1">{badge}</span>}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-gray-500 leading-relaxed"
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8 flex justify-center gap-4"
                        >
                            <Link href="/demo" className="btn-primary px-8 py-3 rounded-xl font-bold flex items-center gap-2">
                                Get Started <ArrowRight size={18} />
                            </Link>
                            <Link href="/contact" className="px-8 py-3 rounded-xl font-bold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                                Contact Sales
                            </Link>
                        </motion.div>
                    </div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/50 bg-white p-2 md:p-4"
                    >
                        <div className="rounded-xl overflow-hidden bg-gray-50 aspect-[16/9] md:aspect-[21/9] relative flex items-center justify-center">
                            {visual}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to transform your hiring process?</h2>
                    <div className="flex justify-center">
                        <Link href="/demo" className="btn-glow text-white px-8 py-4 rounded-xl font-bold text-lg">
                            Schedule a Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
