'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { Users, MessageSquare, Heart } from 'lucide-react'

export default function TestimonialsPage() {
    return (
        <FeaturePage
            title="Wall of Love"
            subtitle="Customer Reviews"
            description="Don't just take our word for it. Read what hiring managers and recruiters are saying about us."
            icon={Heart}
            visual={<div className="w-full h-full bg-red-50 flex items-center justify-center font-bold text-red-200 text-4xl">LOVE WALL</div>}
            features={[
                { title: 'Review Aggregation', description: 'We pull reviews from G2, Capterra, and Trustpilot.', icon: MessageSquare },
                { title: 'Video Testimonials', description: 'Watch authentic stories from happy customers.', icon: Users },
                { title: 'Social Proof', description: 'Real tweets and LinkedIn posts from community members.', icon: Heart },
            ]}
        />
    )
}
