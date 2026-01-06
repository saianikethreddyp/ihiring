'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { Blocks, Link2, GitMerge, RefreshCw } from 'lucide-react'

export default function IntegrationsPage() {
    const logos = [
        { name: 'Slack', color: 'bg-[#4A154B]' },
        { name: 'Zoom', color: 'bg-[#2D8CFF]' },
        { name: 'Google', color: 'bg-[#4285F4]' },
        { name: 'Teams', color: 'bg-[#6264A7]' },
        { name: 'Greenhouse', color: 'bg-[#00B24F]' },
        { name: 'Lever', color: 'bg-[#00A4BD]' },
        { name: 'Workday', color: 'bg-[#E25200]' },
        { name: 'Ashby', color: 'bg-[#FF0055]' },
    ]

    const visual = (
        <div className="w-full h-full bg-white flex items-center justify-center p-10 font-sans relative overflow-hidden">
            {/* Central Hub */}
            <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center z-10 border border-gray-100 relative">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">iH</span>
                <div className="absolute -inset-4 border border-dashed border-gray-300 rounded-full animate-spin-slow" />
            </div>

            {/* Orbiting Logos */}
            {logos.map((logo, i) => {
                const angle = (i / logos.length) * 2 * Math.PI
                const radius = 140
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                    <div
                        key={logo.name}
                        className="absolute w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-[10px] transform hover:scale-110 transition-transform cursor-pointer"
                        style={{
                            backgroundColor: logo.color.replace('bg-', ''), // simplified for demo
                            left: `calc(50% + ${x}px - 24px)`,
                            top: `calc(50% + ${y}px - 24px)`,
                        }}
                    >
                        <div className={`w-full h-full rounded-xl ${logo.color} opacity-90`} />
                    </div>
                )
            })}

            {/* Connecting Lines (Simulated) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                {logos.map((_, i) => {
                    const angle = (i / logos.length) * 2 * Math.PI
                    const radius = 140
                    const x = 50 + (Math.cos(angle) * radius / 6) // simplified percentages
                    const y = 50 + (Math.sin(angle) * radius / 3) // layout aspect ratio messes this up, kept simple
                    return <line key={i} x1="50%" y1="50%" x2={`${50 + Math.cos(angle) * 35}%`} y2={`${50 + Math.sin(angle) * 35}%`} stroke="currentColor" strokeWidth="1" />
                })}
            </svg>
        </div>
    )

    const features = [
        { title: 'One-Click Connect', description: 'Integrate with your existing ATS, calendar, and communication tools in seconds.', icon: Link2 },
        { title: 'Two-Way Sync', description: 'Keep data consistent across all platforms automatically.', icon: RefreshCw },
        { title: 'Custom Workflows', description: 'Build automated triggers using Zapier or our powerful API.', icon: GitMerge },
    ]

    return (
        <FeaturePage
            title="Integrations"
            subtitle="Connect Your Stack"
            description="iHiring.ai plays nice with the tools you already love. Seamlessly sync data and automate workflows."
            icon={Blocks}
            visual={visual}
            features={features}
        />
    )
}
