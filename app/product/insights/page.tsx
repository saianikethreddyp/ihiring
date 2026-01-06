'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { LineChart, BarChart3, PieChart, TrendingUp, Filter, Download, Clock, CheckCircle } from 'lucide-react'

export default function InsightsPage() {
    const visual = (
        <div className="w-full h-full bg-gray-50 p-6 font-sans flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Hiring Analytics</h2>
                <div className="flex gap-2">
                    <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 flex items-center gap-2"><Filter size={14} /> Last 30 Days</div>
                    <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600"><Download size={14} /></div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Time to Hire', value: '14 days', trend: '-2 days', color: 'text-green-600', icon: Clock },
                    { label: 'Offer Acceptance', value: '85%', trend: '+5%', color: 'text-green-600', icon: CheckCircle },
                    { label: 'Pipeline Value', value: '$42k', trend: '+12%', color: 'text-blue-600', icon: TrendingUp }
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <div className="text-gray-500 text-xs font-bold uppercase mb-2">{stat.label}</div>
                        <div className="flex items-end justify-between">
                            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                            <div className={`text-xs font-bold ${stat.color} bg-gray-50 px-1.5 py-0.5 rounded`}>{stat.trend}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex-1 bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <h3 className="font-bold text-gray-900 text-sm mb-4">Pipeline Velocity</h3>
                <div className="absolute inset-x-4 bottom-4 top-12 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-500 rounded-t-sm opacity-90 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
                    ))}
                </div>
            </div>
        </div>
    )

    const features = [
        { title: 'Full Funnel Metrics', description: 'Track every stage of your hiring pipeline from application to offer.', icon: BarChart3 },
        { title: 'Diversity & Inclusion', description: 'Monitor diversity metrics to ensure equitable hiring practices.', icon: PieChart },
        { title: 'Forecasting', description: 'Predict time-to-fill and budget requirements based on historical data.', icon: TrendingUp },
    ]

    return (
        <FeaturePage
            title="Interview Insights"
            subtitle="Data-Driven Hiring"
            description="Stop guessing. Make informed decisions with comprehensive analytics that reveal what's working and where you can improve."
            icon={LineChart}
            visual={visual}
            features={features}
        />
    )
}
