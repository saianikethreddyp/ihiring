'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { Sparkles, FileText, Search, Wand2, Highlighter, Quote } from 'lucide-react'

export default function NotesPage() {
    const visual = (
        <div className="w-full h-full bg-slate-50 flex p-6 md:p-10 font-sans gap-8">
            {/* Document Paper */}
            <div className="flex-1 bg-white rounded-xl shadow-xl border border-gray-200 p-8 relative">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Interview Transcript</h3>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-100 rounded w-1/4" />
                        <div className="h-3 bg-gray-100 rounded w-full" />
                        <div className="h-3 bg-gray-100 rounded w-5/6" />
                    </div>

                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-2 bg-yellow-100/50 rounded-lg opacity-100" />
                        <div className="relative space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-1/6" />
                            <div className="h-3 bg-gray-800 rounded w-full" />
                            <div className="h-3 bg-gray-800 rounded w-11/12" />
                        </div>

                        {/* Floating Insight */}
                        <div className="absolute -right-32 top-0 bg-yellow-50 border border-yellow-200 p-3 rounded-xl shadow-lg w-40 transform translate-x-4">
                            <div className="flex items-center gap-1 text-yellow-600 font-bold text-xs mb-1">
                                <Sparkles size={12} /> Key Insight
                            </div>
                            <div className="text-[10px] text-gray-600 leading-tight">
                                Candidate demonstrated strong leadership during crisis management.
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 opacity-50">
                        <div className="h-4 bg-gray-100 rounded w-1/4" />
                        <div className="h-3 bg-gray-100 rounded w-full" />
                        <div className="h-3 bg-gray-100 rounded w-4/5" />
                    </div>
                </div>
            </div>

            {/* AI Summary Sidebar */}
            <div className="w-64 hidden lg:flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                    <div className="flex items-center gap-2 text-purple-600 font-bold text-sm mb-3">
                        <Wand2 size={16} /> AI Summary
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 bg-purple-50 rounded w-full" />
                        <div className="h-2 bg-purple-50 rounded w-full" />
                        <div className="h-2 bg-purple-50 rounded w-2/3" />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="text-gray-900 font-bold text-sm mb-3">Tags</div>
                    <div className="flex flex-wrap gap-2">
                        {['Leadership', 'Crisis Mgmt', 'Python', 'Remote'].map(t => (
                            <span key={t} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

    const features = [
        { title: 'Automated Notes', description: 'Forget manual note-taking. Get accurate transcripts and summaries instantly.', icon: FileText },
        { title: 'Smart Highlights', description: 'AI automatically tags key moments, skills mentioned, and red flags.', icon: Highlighter },
        { title: 'Searchable History', description: 'Find exactly what a candidate said about "salary" or "relocation" in seconds.', icon: Search },
    ]

    return (
        <FeaturePage
            title="AI Interview Notes"
            subtitle="Intelligent Documentation"
            description="Focus on the conversation, not the notetaking. Our AI captures, transcribes, and summarizes every interview automatically."
            icon={Sparkles}
            visual={visual}
            features={features}
        />
    )
}
