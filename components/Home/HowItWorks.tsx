'use client'

import { motion } from 'framer-motion'
import { Check, Mic, Phone, Video, MoreHorizontal, Search, Paperclip, Send } from 'lucide-react'

// --- Step 1: Job Post UI ---
function JobPostUI() {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden font-sans flex flex-col">
      {/* Window Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-3 flex items-center justify-between shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="text-xs text-gray-400 font-medium">New Job Post</div>
        <div className="w-4" /> {/* Spacer for balance */}
      </div>

      {/* Editor Content */}
      <div className="p-4 space-y-3 flex-1 overflow-hidden">
        <div className="space-y-1">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Job Title</div>
          <div className="text-sm font-bold text-gray-800 bg-gray-50 p-2 rounded border border-gray-100">
            Senior Product Designer
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Skills Required</div>
          <div className="flex flex-wrap gap-2">
            {['Figma', 'React'].map((skill) => (
              <span key={skill} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-medium border border-blue-100">
                {skill}
              </span>
            ))}
            <span className="text-xs text-gray-400 self-center">+3</span>
          </div>
        </div>

        {/* Generate Button Animation */}
        <motion.div
          className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold py-2 rounded-lg text-center shadow-lg shadow-blue-500/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ✨ Generate with AI
        </motion.div>
      </div>
    </div>
  )
}

// --- Step 2: Screening UI ---
function ScreeningUI() {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
      {/* Search Header */}
      <div className="p-3 border-b border-gray-100 flex items-center gap-2 shrink-0">
        <Search size={14} className="text-gray-400" />
        <div className="text-xs text-gray-400">Search...</div>
      </div>

      {/* Candidate List */}
      <div className="flex-1 p-2 space-y-2 overflow-hidden">
        {[
          { name: 'Alex M.', role: 'Senior Designer', score: 98, color: 'bg-green-500' },
          { name: 'Sarah K.', role: 'UX Researcher', score: 85, color: 'bg-yellow-500' },
          { name: 'Mike R.', role: 'Product Designer', score: 72, color: 'bg-gray-300' },
        ].map((candidate, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex items-center justify-between p-2 rounded-lg border ${i === 0 ? 'bg-blue-50/50 border-blue-100' : 'bg-gray-50 border-transparent'}`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs font-bold text-gray-500`}>
                {candidate.name[0]}
              </div>
              <div>
                <div className="text-xs font-bold text-gray-800">{candidate.name}</div>
                <div className="text-[10px] text-gray-500">{candidate.role}</div>
              </div>
            </div>

            {/* Match Score Badge */}
            <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${i === 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
              <span>{candidate.score}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// --- Step 3: Interview UI (Video Call) ---
function InterviewUI() {
  return (
    <div className="w-full h-full bg-gray-900 rounded-xl shadow-2xl overflow-hidden relative flex flex-col">
      {/* Top Bar */}
      <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
        <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          <span className="text-[10px] text-white/90 font-medium tracking-wide">REC</span>
        </div>
      </div>

      {/* Main Video Area (Candidate) */}
      <div className="flex-1 relative bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
          alt="Candidate"
          className="w-full h-full object-cover opacity-80"
        />

        {/* AI Interviewer Badge Floating */}
        <motion.div
          className="absolute top-8 left-6 bg-white/10 backdrop-blur-lg border border-white/20 p-2 rounded-lg max-w-[140px] shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
            <span className="text-[8px] text-blue-200 font-semibold uppercase">AI Assistant</span>
          </div>
          <div className="text-[10px] text-white font-medium leading-tight">
            Tell me about a challenging project...
          </div>
        </motion.div>

        {/* Candidate Response Bubble */}
        <motion.div
          className="absolute bottom-16 right-6 bg-blue-600/90 backdrop-blur-md border border-blue-500/50 p-2 rounded-lg max-w-[140px] shadow-lg rounded-tr-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-[10px] text-white leading-relaxed">
            In my last role, we migrated a legacy DB...
          </div>
        </motion.div>
      </div>

      {/* Bottom Controls */}
      <div className="h-10 bg-gray-900/90 backdrop-blur border-t border-white/10 flex items-center justify-center gap-3 relative z-10 shrink-0">
        <div className="p-1.5 rounded-full bg-white/10 text-white"><Mic size={12} /></div>
        <div className="p-1.5 rounded-full bg-white/10 text-white"><Video size={12} /></div>
        <div className="p-1.5 rounded-full bg-red-500 text-white"><Phone size={12} className="rotate-[135deg]" /></div>
      </div>
    </div>
  )
}

// --- Step 4: Hire UI ---
function HireUI() {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden relative flex flex-col">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-500 to-purple-600 shrink-0" />

      <div className="flex-1 pt-10 px-4 pb-4 flex flex-col items-center justify-between relative z-10">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg bg-gray-100 overflow-hidden mb-2">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" alt="Profile" />
          </div>

          <h3 className="text-base font-bold text-gray-900">Emily Chen</h3>
          <p className="text-[10px] text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full border border-green-100 mb-2">
            98% Match
          </p>

          <div className="w-full flex gap-2 justify-center mb-2">
            <div className="bg-gray-50 rounded p-1.5 text-center min-w-[50px]">
              <div className="text-[8px] text-gray-400 uppercase">Tech</div>
              <div className="text-xs font-bold text-gray-800">A+</div>
            </div>
            <div className="bg-gray-50 rounded p-1.5 text-center min-w-[50px]">
              <div className="text-[8px] text-gray-400 uppercase">Culture</div>
              <div className="text-xs font-bold text-gray-800">A</div>
            </div>
          </div>
        </div>

        <button className="w-full bg-black text-white text-[10px] font-bold py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-1.5 shrink-0">
          <Send size={10} />
          Send Offer
        </button>
      </div>

      {/* Confetti Decoration */}
      <motion.div
        className="absolute top-10 left-10 text-xl"
        animate={{ y: [0, 20, 40], opacity: [1, 1, 0], rotate: [0, 45, 90] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
      >🎉</motion.div>
    </div>
  )
}


const steps = [
  {
    title: 'Create Job Posting',
    description: 'Define your requirements and let SAM understand your ideal candidate.',
    component: JobPostUI,
  },
  {
    title: 'SAM Screens Candidates',
    description: 'AI automatically reviews resumes and shortlists the best matches.',
    component: ScreeningUI,
  },
  {
    title: 'AI Conducts Interviews',
    description: 'SAM interviews candidates 24/7 with intelligent follow-up questions.',
    component: InterviewUI,
  },
  {
    title: 'Hire Top Talent',
    description: 'Get detailed insights and hire your perfect candidate.',
    component: HireUI,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Recruiting on Autopilot
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Transform your hiring process with our AI-powered platform. From detailed job analysis to the final offer letter, SAM handles the heavy lifting.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col group"
            >
              {/* UI Component Container with Fixed Aspect Ratio */}
              <div className="relative mb-8 transform transition-transform duration-500 hover:-translate-y-2 w-full aspect-[5/4]">
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 z-20 w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center font-bold text-sm shadow-lg border border-gray-700">
                  {index + 1}
                </div>

                {/* Component Wrapper with Shadow */}
                <div className="rounded-2xl shadow-xl shadow-gray-200/50 bg-white ring-1 ring-gray-100 overflow-hidden w-full h-full">
                  <step.component />
                </div>

                {/* Decorative Blob Behind */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${index === 2 ? 'from-purple-100 to-blue-100' : 'from-gray-100 to-gray-50'} rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              </div>

              {/* Text Content */}
              <div className="px-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
