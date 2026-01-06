'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { Server, LifeBuoy, Book } from 'lucide-react'

export default function HelpPage() {
    return (
        <FeaturePage
            title="Help Center"
            subtitle="Support & Docs"
            description="Everything you need to know about using iHiring.ai. Guides, API docs, and FAQs."
            icon={LifeBuoy}
            visual={<div className="w-full h-full bg-green-50 flex items-center justify-center font-bold text-green-200 text-4xl">KNOWLEDGE BASE</div>}
            features={[
                { title: 'Documentation', description: 'Detailed guides for every feature.', icon: Book },
                { title: 'API Reference', description: 'Technical documentation for developers.', icon: Server },
                { title: 'Support Ticket', description: 'Get help from our support team.', icon: LifeBuoy },
            ]}
        />
    )
}
