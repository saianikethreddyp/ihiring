'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Mic, Video, Activity, Sparkles, MessageSquare, GripVertical, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#110C24] overflow-hidden pt-32 pb-20">

      {/* Background: Deep Purple/Blue Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4F46E5] rounded-full blur-[120px] opacity-40 mix-blend-screen animate-blob" />
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-[#7C3AED] rounded-full blur-[120px] opacity-40 mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-[#2563EB] rounded-full blur-[120px] opacity-30 mix-blend-screen animate-blob animation-delay-4000" />

        {/* Noise Overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium tracking-wide mb-8 backdrop-blur-md shadow-lg"
        >
          <Sparkles size={14} className="text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text font-bold">New:</span> AI Interviewer 2.0
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto"
        >
          The AI platform built for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">exceptional hiring.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Transform quality and efficiency with AI copilots that elevate every search, interview, and decision.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
        >
          <Link href="/demo" className="btn-primary h-14 px-8 rounded-full font-bold text-lg flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-1">
            See a Demo <ArrowRight size={20} />
          </Link>
          <button className="h-14 px-8 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
            <Play size={20} className="fill-white" /> How it Works
          </button>
        </motion.div>

        {/* Centered Visual (Glass Hologram) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur-xl shadow-2xl overflow-hidden group perspective-1000"
          style={{ boxShadow: '0 0 100px -20px rgba(79, 70, 229, 0.3)' }}
        >
          {/* Top Bar Decoration */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Inner Grid */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4 md:p-6">

            {/* Left Panel: AI Core */}
            <div className="col-span-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Pulsing Avatar */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/40 rounded-full animate-ping blur-lg" />
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative z-10 shadow-lg border border-white/20">
                  <Activity size={32} className="text-white" />
                </div>
              </div>
              <div className="text-center relative z-10 px-4">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Live Analysis
                </div>
                <p className="text-sm text-blue-100 font-medium">
                  "Let's dive into your experience with scalable systems."
                </p>
              </div>
              {/* Controls */}
              <div className="mt-8 flex gap-4 opacity-70">
                <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><Mic size={16} className="text-white" /></div>
                <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><Video size={16} className="text-white" /></div>
              </div>
            </div>

            {/* Right Panel: Video & Transcript */}
            <div className="col-span-8 flex flex-col gap-4">

              {/* Candidate Video */}
              <div className="flex-1 bg-gray-800 rounded-2xl relative overflow-hidden border border-white/10 group-video">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=600"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Alex Chen
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-400 border border-cyan-500/30">
                    98% Match
                  </div>
                </div>
              </div>

              {/* Transcript Strip */}
              <div className="h-28 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 flex gap-4 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500" />
                <div className="flex-1 space-y-2">
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-cyan-300 w-12 shrink-0 uppercase">AI Bot</span>
                    <p className="text-xs text-blue-100/80">Can you explain a time you optimized a slow database query?</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-white w-12 shrink-0 uppercase">Alex</span>
                    <p className="text-xs text-blue-100/80">In my last role, we had a query taking 5s. I added a composite index and...</p>
                  </div>
                </div>
                <div className="flex items-end gap-1 h-8 self-end opacity-40">
                  {[1, 3, 2, 5, 4, 2, 3, 1].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [4, h * 4, 4] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-white rounded-full"
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Global Logos (Transparency) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-sm font-medium text-blue-200/60 mb-6 uppercase tracking-widest">Trusted by forward-thinking teams</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Acme Corp', 'GlobalTech', 'Nebula', 'Circle', 'FoxRun'].map((logo, i) => (
              <span key={i} className="text-xl font-bold text-white">{logo}</span>
            ))}
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
