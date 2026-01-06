'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { Rocket, Zap, Target } from 'lucide-react'

export default function StartupsPage() {
    return (
        <FeaturePage
            title="For Startups"
            subtitle="Move Fast"
            description="Agile hiring tools for fast-growing teams. Hire your founding team and scale up quickly."
            icon={Rocket}
            visual={<div className="w-full h-full bg-blue-50 flex items-center justify-center font-bold text-blue-200 text-4xl">STARTUP UI</div>}
            features={[
                { title: 'Quick Setup', description: 'Get started in minutes, not days.', icon: Zap },
                { title: 'Founder-Friendly Pricing', description: 'Plans that grow with you.', icon: Target },
                { title: 'All-in-One Toolkit', description: 'Everything from sourcing to offer letter.', icon: Rocket },
            ]}
        />
    )
}
