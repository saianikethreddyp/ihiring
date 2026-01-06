'use client'

import { motion } from 'framer-motion'
import { FileSearch, Calendar, Users, BarChart3, CheckCircle2, Clock, Mail, ChevronRight, User, Globe, Trophy, MoreVertical, Paperclip, Filter, Download } from 'lucide-react'

// --- Feature 1: Resume Screening UI (Enhanced) ---
function ResumeUI() {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 p-3 flex justify-between items-center shrink-0 z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-500 font-bold text-xs">PDF</div>
          <div>
            <div className="text-xs font-bold text-gray-800">Senior_Dev_APP.pdf</div>
            <div className="text-[10px] text-gray-400">Uploaded 2 mins ago</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-md border border-green-100 flex items-center gap-1">
            <CheckCircle2 size={10} /> Verified
          </div>
          <div className="p-1.5 hover:bg-gray-50 rounded text-gray-400"><Download size={14} /></div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Parsing Preview (blurred document) */}
        <div className="w-[40%] bg-gray-50 border-r border-gray-100 p-4 space-y-3 opacity-60">
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
          <div className="space-y-1.5 mt-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`h-2 bg-gray-200 rounded ${i % 3 === 0 ? 'w-full' : 'w-5/6'}`} />
            ))}
          </div>
          <div className="h-20 w-full bg-gray-200 rounded mt-4" />
        </div>

        {/* Right Extracted Data */}
        <div className="flex-1 p-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 z-10">
            <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg shadow-blue-500/30">
              98% Match
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Personal Info</div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"><User size={20} /></div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Johnathan Doe</div>
                  <div className="text-xs text-gray-500">john.doe@example.com</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Skills</div>
              <div className="flex flex-wrap gap-1.5">
                {['React Native', 'TypeScript', 'Node.js', 'AWS', 'GraphQL'].map(s => (
                  <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] rounded-md font-medium border border-blue-100 flex items-center gap-1">
                    {s} <span className="opacity-50 text-[8px]">★ 5</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
              <div className="text-[10px] font-bold text-yellow-800 mb-1 flex items-center gap-1">
                <Trophy size={10} /> Achievements Highlight
              </div>
              <div className="text-[10px] text-yellow-700 leading-relaxed">
                Led a team of 5 developers to ship 3 mobile apps, increasing user engagement by 40%.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Feature 2: Interview Scheduling UI (Enhanced) ---
function SchedulingUI() {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex font-sans">
      {/* Sidebar */}
      <div className="w-48 bg-gray-50 border-r border-gray-100 flex flex-col p-3 hidden sm:flex">
        <div className="text-xs font-bold text-gray-900 mb-4 px-1">Team Calendar</div>

        <div className="space-y-1 mb-6">
          {['Engineering', 'Design', 'Product'].map((team, i) => (
            <div key={team} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white hover:shadow-sm cursor-pointer transition-colors group">
              <div className={`w-2 h-2 rounded-full ${['bg-blue-500', 'bg-purple-500', 'bg-orange-500'][i]}`} />
              <span className="text-xs text-gray-600 group-hover:text-gray-900">{team}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
          <div className="text-[10px] text-gray-400 font-medium mb-1">Upcoming</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] text-blue-600 font-bold">JD</div>
            <div className="overflow-hidden">
              <div className="text-[10px] font-bold truncate">John Doe Interview</div>
              <div className="text-[9px] text-gray-400">In 15 mins</div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 flex flex-col">
        <div className="p-3 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-800">October 24</span>
            <div className="flex bg-gray-100 rounded p-0.5">
              <div className="p-1 hover:bg-white rounded shadow-sm"><ChevronRight size={12} className="rotate-180 text-gray-500" /></div>
              <div className="p-1 hover:bg-white rounded shadow-sm"><ChevronRight size={12} className="text-gray-500" /></div>
            </div>
          </div>
          <button className="px-3 py-1 bg-purple-600 text-white text-[10px] font-bold rounded-md shadow-sm hover:bg-purple-700">
            + Schedule
          </button>
        </div>

        <div className="flex-1 relative overflow-hidden bg-white">
          {/* Grid Lines */}
          {[9, 10, 11, 12, 1, 2].map((t, i) => (
            <div key={i} className="flex h-16 border-b border-gray-50">
              <div className="w-12 border-r border-gray-50 text-[10px] text-gray-400 p-1 text-right pr-2">
                {t}{t > 6 ? 'AM' : 'PM'}
              </div>
              <div className="flex-1 relative">
                {/* Render some events */}
                {i === 1 && (
                  <div className="absolute top-2 left-2 right-12 bottom-2 bg-purple-50 border border-purple-100 rounded-md p-2 flex gap-2 shadow-sm">
                    <div className="w-1 bg-purple-500 rounded-full h-full" />
                    <div>
                      <div className="text-[10px] font-bold text-purple-900">Technical Round</div>
                      <div className="text-[9px] text-purple-600">With Sarah & Mike</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Current Time Indicator */}
          <div className="absolute top-[90px] left-12 right-0 flex items-center">
            <div className="w-2 h-2 rounded-full bg-red-500 -ml-1 border-2 border-white shadow-sm" />
            <div className="h-px bg-red-400 flex-1 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Feature 3: Candidate Analysis UI (Enhanced with Radar) ---
function AnalysisUI() {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col font-sans">
      <div className="p-4 border-b border-gray-100 flex justify-between items-start bg-gray-50/50">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 p-0.5 shadow-sm">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" className="w-full h-full rounded-full object-cover" alt="Profile" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">David Kim</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <Globe size={10} /> San Francisco, CA
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-teal-600 leading-none">9.2</div>
          <div className="text-[10px] text-gray-400">Overall Score</div>
        </div>
      </div>

      <div className="flex-1 p-5 flex items-center justify-center relative">
        {/* Radar Chart Simulation */}
        <div className="relative w-48 h-48">
          {/* Background Web */}
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
            <polygon points="50,5 95,35 75,90 25,90 5,35" fill="none" stroke="currentColor" strokeWidth="1" />
            <polygon points="50,25 75,40 65,70 35,70 25,40" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="50" x2="50" y2="5" stroke="currentColor" />
            <line x1="50" y1="50" x2="95" y2="35" stroke="currentColor" />
            <line x1="50" y1="50" x2="75" y2="90" stroke="currentColor" />
            <line x1="50" y1="50" x2="25" y2="90" stroke="currentColor" />
            <line x1="50" y1="50" x2="5" y2="35" stroke="currentColor" />
          </svg>

          {/* Data Shape */}
          <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-teal-500 drop-shadow-md">
            <motion.polygon
              points="50,50 50,50 50,50 50,50 50,50"
              animate={{ points: "50,10 90,38 70,85 30,80 15,40" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              fill="rgba(20, 184, 166, 0.2)"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>

          {/* Labels */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 text-[9px] font-bold text-gray-500">TECH</div>
          <div className="absolute top-[35%] right-0 -mr-6 text-[9px] font-bold text-gray-500">COMM</div>
          <div className="absolute bottom-0 right-0 -mr-2 text-[9px] font-bold text-gray-500">LEAD</div>
          <div className="absolute bottom-0 left-0 -ml-2 text-[9px] font-bold text-gray-500">PROB</div>
          <div className="absolute top-[35%] left-0 -ml-6 text-[9px] font-bold text-gray-500">EXP</div>
        </div>
      </div>

      <div className="bg-gray-50 p-3 flex justify-between border-t border-gray-100 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded bg-teal-500" />
          <span className="text-gray-600">Candidate</span>
        </div>
        <div className="flex items-center gap-1.5 opacity-50">
          <div className="w-2 h-2 rounded bg-gray-400" />
          <span className="text-gray-600">Role Avg</span>
        </div>
      </div>
    </div>
  )
}

// --- Feature 4: Analytics UI (Enhanced with Trend Line) ---
function AnalyticsUI() {
  return (
    <div className="w-full h-full bg-[#111827] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden flex flex-col font-sans">
      {/* Top Metrics Row */}
      <div className="p-5 pb-0">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-orange-500/20 rounded-lg"><BarChart3 size={14} className="text-orange-500" /></div>
            <span className="text-sm font-bold text-white">Recruitment Pulse</span>
          </div>
          <div className="flex gap-1">
            <div className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white">30d</div>
            <div className="px-2 py-0.5 rounded-full text-[10px] text-gray-500 hover:text-white cursor-pointer">90d</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[10px] text-gray-400 mb-1">Total Hires</div>
            <div className="text-2xl font-bold text-white tracking-tight">24<span className="text-sm text-green-500 ml-1">↑12%</span></div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 mb-1">Avg Time</div>
            <div className="text-2xl font-bold text-white tracking-tight">14d<span className="text-sm text-green-500 ml-1">↓3d</span></div>
          </div>
        </div>
      </div>

      {/* Graph Area */}
      <div className="flex-1 relative mt-4 px-2">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
          {/* Grid */}
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(255,255,255,0.05)" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.05)" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="rgba(255,255,255,0.05)" />

          {/* Trend Line */}
          {/* Points: 0,80  20,60  40,65  60,40  80,45  100,20 (inverted for SVG coords) */}
          <motion.path
            d="M0 100 Q 20 60, 40 70 T 80 40 T 150 20"
            fill="none"
            stroke="#F97316"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            vectorEffect="non-scaling-stroke"
          />

          {/* Gradient Fill under line */}
          <motion.path
            d="M0 100 Q 20 60, 40 70 T 80 40 T 150 20 V 150 H 0 Z"
            fill="url(#gradient)"
            opacity="0.2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}


// --- Main Feature Content (Unchanged Logic, Updated Components) ---
const features = [
  {
    prefix: 'ONE',
    title: 'Resume Screening',
    description: "Our proprietary algorithm screens each applicant's resume, sorts and provides audited reports based on defined criteria.",
    bullets: ['Automated resume parsing', 'AI-powered candidate ranking', 'Customizable screening criteria', 'Audited reports with insights'],
    icon: FileSearch,
    color: 'bg-blue-500',
    number: '01',
    component: ResumeUI
  },
  {
    prefix: 'TWO',
    title: 'Interview Scheduling',
    description: "Eliminate the back-and-forth emails. Our automated scheduling system coordinates availability between candidates and interviewers seamlessly.",
    bullets: ['Automated calendar syncing', 'Smart time zone handling', 'Customizable booking links', 'Automated reminders'],
    icon: Calendar,
    color: 'bg-purple-500',
    number: '02',
    component: SchedulingUI
  },
  {
    prefix: 'THREE',
    title: 'Candidate Analysis',
    description: "Get deep insights into candidate performance with AI-driven analysis of skills, experience, and cultural fit.",
    bullets: ['Detailed skill assessment', 'Behavioral analysis', 'Cultural fit scoring', 'Comparative ranking'],
    icon: Users,
    color: 'bg-teal-500',
    number: '03',
    component: AnalysisUI
  },
  {
    prefix: 'FOUR',
    title: 'Data Insights',
    description: "Make informed hiring decisions with comprehensive data visualization and reporting tools.",
    bullets: ['Real-time hiring metrics', 'Pipeline health monitoring', 'Diversity & inclusion tracking', 'ROI analysis'],
    icon: BarChart3,
    color: 'bg-orange-500',
    number: '04',
    component: AnalyticsUI
  }
]

export default function FeaturesOverview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            Our Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Everything You Need to Hire <span className="text-blue-600">Smarter</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Powerful features designed to streamline your entire recruitment process from start to finish.
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={feature.prefix} className="relative">
              {/* Connector Line (except last item) */}
              {index !== features.length - 1 && (
                <div className={`absolute -bottom-32 left-1/2 w-px h-32 bg-gradient-to-b from-gray-200 to-transparent hidden lg:block ${index % 2 === 0 ? 'translate-x-[500px]' : '-translate-x-[500px]'}`} />
              )}

              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex-1 lg:max-w-xl"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-8 shadow-lg shadow-gray-200 ${feature.color.replace('bg-', 'text-').replace('500', '600')} bg-white`}>
                    <feature.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-gray-200 font-mono text-4xl select-none">{feature.number}</span>
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-4">
                    {feature.bullets.map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="flex items-center gap-3 group"
                      >
                        <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle2 className={`w-5 h-5 ${feature.color.replace('bg-', 'text-').replace('500', '500')}`} />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{bullet}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Feature UI Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 w-full max-w-xl"
                >
                  <div className="aspect-[4/3] w-full relative">
                    {/* Decorative Blobs */}
                    <div className={`absolute -inset-8 opacity-30 blur-2xl rounded-full ${feature.color.replace('bg-', 'bg-').replace('500', '200')}`} />

                    {/* Component Wrapper */}
                    <div className="relative h-full transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-2xl">
                      <feature.component />
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
