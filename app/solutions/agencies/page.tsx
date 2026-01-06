'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { Users, Briefcase, Share2 } from 'lucide-react'

export default function AgenciesPage() {
    return (
        <FeaturePage
            title="For Agencies"
            subtitle="Recruit Faster"
            description="Manage multiple clients and hiring pipelines from a single dashboard. Designed for high-volume staffing agencies."
            icon={Users}
            visual={<div className="w-full h-full bg-purple-50 flex items-center justify-center font-bold text-purple-200 text-4xl">AGENCY DASHBOARD</div>}
            features={[
                { title: 'Client Portals', description: 'Give clients read-only access to specific pipelines.', icon: Share2 },
                { title: 'White Labeling', description: 'Brand the candidate experience with your agency logo.', icon: Briefcase },
                { title: 'Collaboration', description: 'Real-time feedback loops with hiring managers.', icon: Users },
            ]}
        />
    )
}
