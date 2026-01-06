'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { ClipboardList, Calendar, Users, Clock, CheckSquare, Share2 } from 'lucide-react'

export default function PlanningPage() {
    const visual = (
        <div className="w-full h-full bg-white flex flex-col p-6 font-sans">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Senior React Developer</h2>
                    <div className="text-gray-500 text-sm mt-1">Interview Plan • Round 2: Technical Assessment</div>
                </div>
                <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">+2</div>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <div className="flex gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">01</div>
                            <div>
                                <div className="font-bold text-gray-900">React Fundamentals</div>
                                <div className="text-sm text-gray-500">15 mins</div>
                            </div>
                        </div>
                        <div className="pl-11 text-sm text-gray-600 space-y-1">
                            <div className="flex items-center gap-2"><CheckSquare size={14} className="text-blue-500" /> Virtual DOM & Reconciliation</div>
                            <div className="flex items-center gap-2"><CheckSquare size={14} className="text-blue-500" /> Hooks & Lifecycle</div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-gray-200 opacity-60">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 font-bold">02</div>
                            <div>
                                <div className="font-bold text-gray-900">System Design</div>
                                <div className="text-sm text-gray-500">20 mins</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Competency Matrix</h4>
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between text-xs mb-1 font-medium"><span>Technical</span><span>Required</span></div>
                            <div className="h-2 bg-gray-200 rounded-full"><div className="w-3/4 h-full bg-purple-500 rounded-full" /></div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1 font-medium"><span>Communication</span><span>Preferred</span></div>
                            <div className="h-2 bg-gray-200 rounded-full"><div className="w-1/2 h-full bg-blue-500 rounded-full" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const features = [
        { title: 'Structured Interview Kits', description: 'Create consistent interview plans with predefined questions and scorecards.', icon: ClipboardList },
        { title: 'Calibration Tools', description: 'Ensure all interviewers are aligned on requirements before the process starts.', icon: Users },
        { title: 'Automated Scheduling', description: 'Coordinate times seamlessly across multiple interviewers and candidates.', icon: Calendar },
    ]

    return (
        <FeaturePage
            title="Interview Planning"
            subtitle="Streamline Your Process"
            description="Design structured interview plans, align your hiring team, and eliminate chaos before the first conversation happens."
            icon={ClipboardList}
            visual={visual}
            features={features}
        />
    )
}
