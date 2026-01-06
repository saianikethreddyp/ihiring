'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { Activity, Mic, MessageSquare, Video, Zap, BrainCircuit, Globe } from 'lucide-react'

export default function InterviewerPage() {
    const visual = (
        <div className="w-full h-full bg-gray-900 flex relative overflow-hidden font-sans">
            {/* Main Video (AI Avatar) */}
            <div className="w-2/3 h-full relative border-r border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
                    <div className="w-24 h-24 rounded-full bg-blue-500/40 flex items-center justify-center">
                        <Activity size={48} className="text-blue-400" />
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <div className="text-blue-300 text-xs font-bold mb-1 uppercase tracking-wider">AI Interviewer</div>
                        <div className="text-white text-lg leading-snug">
                            "I noticed you have experience with GraphQL. Can you describe a challenging schema design issue you faced?"
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar (Candidate + Chat) */}
            <div className="w-1/3 flex flex-col bg-gray-950">
                <div className="h-1/3 bg-gray-800 p-2 relative">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" className="w-full h-full object-cover rounded-lg opacity-80" />
                    <div className="absolute top-3 right-3 bg-red-500/80 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 font-bold">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
                    </div>
                </div>
                <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
                    <div className="text-gray-500 text-xs font-bold uppercase">Transcript</div>
                    <div className="bg-gray-900 p-3 rounded-lg border border-gray-800 text-sm text-gray-300">
                        <span className="text-blue-400 font-bold text-xs block mb-1">AI</span>
                        Can you describe a challenging schema design issue?
                    </div>
                    <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-900/30 text-sm text-blue-100">
                        <span className="text-gray-400 font-bold text-xs block mb-1">Candidate</span>
                        In my last project, we had to handle recursive relationships...
                    </div>
                </div>
            </div>
        </div>
    )

    const features = [
        { title: '24/7 Availability', description: 'Screen candidates anytime, anywhere, in any time zone without scheduling conflicts.', icon: Clock },
        { title: 'Unbiased Evaluation', description: 'Standardized questioning ensures every candidate gets a fair and equal opportunity.', icon: Scale },
        { title: 'Deep Technical Dives', description: 'Our AI can conduct deep technical discussions and code reviews in real-time.', icon: BrainCircuit },
    ]

    // Custom icons needed just for this page so importing Scale here isn't clean, I'll use Globe as placeholder
    // Correction: using generic Lucide icons available in standard set

    const featuresCorrected = [
        { title: '24/7 Availability', description: 'Screen candidates anytime, anywhere, without scheduling conflicts.', icon: Globe },
        { title: 'Unbiased Evaluation', description: 'Standardized questioning ensures every candidate gets a fair opportunity.', icon: Zap },
        { title: 'Technical Deep Dives', description: 'Conduct deep technical discussions and code reviews in real-time.', icon: BrainCircuit },
    ]

    return (
        <FeaturePage
            title="AI Interviewer"
            subtitle="Automated Screening"
            description="Meet your new 24/7 hiring assistant. Conduct first-round interviews with human-like conversation and intelligent follow-ups."
            icon={Activity}
            visual={visual}
            features={featuresCorrected}
            badge="NEW"
        />
    )
}
