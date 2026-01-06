'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { BookOpen, PenTool, Rss, TrendingUp } from 'lucide-react'

export default function BlogPage() {
    return (
        <FeaturePage
            title="Blog"
            subtitle="Latest Insights"
            description="Trends, tips, and data-driven insights on the future of recruitment and AI."
            icon={BookOpen}
            visual={<div className="w-full h-full bg-orange-50 flex items-center justify-center font-bold text-orange-200 text-4xl">BLOG GRID</div>}
            features={[
                { title: 'Industry Trends', description: 'Stay ahead of the curve with deep dives into market shifts.', icon: TrendingUp },
                { title: 'Product Updates', description: 'Learn about the latest features and improvements.', icon: PenTool },
                { title: 'Best Practices', description: 'Guides and tutorials to master the platform.', icon: Rss },
            ]}
        />
    )
}
