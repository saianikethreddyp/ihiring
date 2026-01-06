'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { FileText, TrendingUp, Award } from 'lucide-react'

export default function StoriesPage() {
    return (
        <FeaturePage
            title="Case Studies"
            subtitle="Success Stories"
            description="See how leading companies are transforming their hiring process with iHiring.ai."
            icon={FileText}
            visual={<div className="w-full h-full bg-gray-50 flex items-center justify-center font-bold text-gray-200 text-4xl">CASE STUDIES</div>}
            features={[
                { title: 'Tech Giants', description: 'How scaling unicorns hire engineering talent 50% faster.', icon: TrendingUp },
                { title: 'Healthcare', description: 'Streamlining high-volume recruitment for hospitals.', icon: Award },
                { title: 'Finance', description: 'Securing top talent in competitive markets.', icon: FileText },
            ]}
        />
    )
}
