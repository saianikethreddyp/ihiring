'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { Users, Slack, MessageCircle } from 'lucide-react'

export default function CommunityPage() {
    return (
        <FeaturePage
            title="Community"
            subtitle="Join the Conversation"
            description="Connect with thousands of talent acquisition professionals and share best practices."
            icon={Users}
            visual={<div className="w-full h-full bg-indigo-50 flex items-center justify-center font-bold text-indigo-200 text-4xl">COMMUNITY HUB</div>}
            features={[
                { title: 'Slack Group', description: 'Real-time chat with 10k+ recruiters.', icon: Slack },
                { title: 'Events & Webbies', description: 'Weekly fireside chats with industry leaders.', icon: Users },
                { title: 'Mentorship', description: 'Find a mentor or become one.', icon: MessageCircle },
            ]}
        />
    )
}
