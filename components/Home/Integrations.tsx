'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// SVG Icon Components for real brands
const SlackIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" />
        <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" />
        <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" />
        <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
)

const TeamsIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#5059C9" d="M20.625 5.625h-3c0-1.657-1.343-3-3-3s-3 1.343-3 3H8.625c-1.036 0-1.875.84-1.875 1.875v9.375c0 1.036.84 1.875 1.875 1.875h12c1.036 0 1.875-.84 1.875-1.875V7.5c0-1.036-.84-1.875-1.875-1.875zM14.625 3.75a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75z" />
        <path fill="#7B83EB" d="M11.625 8.625h-9c-1.036 0-1.875.84-1.875 1.875v6c0 1.036.84 1.875 1.875 1.875h9c1.036 0 1.875-.84 1.875-1.875v-6c0-1.036-.84-1.875-1.875-1.875z" />
        <circle fill="#5059C9" cx="19.5" cy="3.75" r="2.25" />
    </svg>
)

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
)

const MicrosoftIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#F25022" d="M1 1h10v10H1z" />
        <path fill="#7FBA00" d="M13 1h10v10H13z" />
        <path fill="#00A4EF" d="M1 13h10v10H1z" />
        <path fill="#FFB900" d="M13 13h10v10H13z" />
    </svg>
)

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const ZoomIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#2D8CFF" d="M4.585 8.568C4.585 7.703 5.28 7 6.135 7h8.8c.51 0 .95.305 1.145.748l3.79 2.606v3.312l-3.79 2.606c-.195.443-.635.748-1.145.748h-8.8c-.855 0-1.55-.703-1.55-1.568V8.568z" />
    </svg>
)

const CalendlyIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#006BFF" d="M19.5 3h-3V1.5a.75.75 0 0 0-1.5 0V3h-6V1.5a.75.75 0 0 0-1.5 0V3h-3A2.25 2.25 0 0 0 2.25 5.25v13.5A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V5.25A2.25 2.25 0 0 0 19.5 3zM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
    </svg>
)

const GreenhouseIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <circle fill="#24A47F" cx="12" cy="12" r="10" />
        <path fill="white" d="M12 6l4 4h-3v6h-2v-6H8l4-4z" />
    </svg>
)

const WorkdayIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <circle fill="#F5A623" cx="12" cy="12" r="10" />
        <path fill="white" d="M8 9h8v2H8zm0 4h6v2H8z" />
    </svg>
)

const LeverIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <rect fill="#5D4AB8" rx="4" width="24" height="24" />
        <path fill="white" d="M7 7h3v10H7zm4 0h3v7h3v3h-6z" />
    </svg>
)

const ZapierIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#FF4A00" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.243 14.828l-1.414 1.414L12 13.414l-2.828 2.828-1.414-1.414L10.586 12 7.758 9.172l1.414-1.414L12 10.586l2.828-2.828 1.414 1.414L13.414 12l2.829 2.828z" />
    </svg>
)

const OktaIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#00297A" d="M12 0C5.389 0 0 5.389 0 12s5.389 12 12 12 12-5.389 12-12S18.611 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
    </svg>
)

const NotionIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#000" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.28c-.42-.326-.98-.7-2.055-.607L3.01 2.867c-.466.046-.56.28-.374.466l1.823.875zM6.313 7.075v13.15c0 .7.373.966 1.214.92l14.523-.84c.84-.046.933-.56.933-1.166V6.12c0-.606-.233-.886-.746-.84l-15.177.887c-.56.047-.747.326-.747.888zm14.523.84v12.25c0 .42-.14.606-.466.653l-4.57.28c-.326.046-.56-.094-.56-.42V8.287c0-.326.187-.513.56-.56l4.57-.28c.373-.046.466.14.466.466zm-13.308.653c0-.326.187-.513.56-.56l4.57-.28c.373-.046.466.14.466.466V19.6c0 .42-.14.606-.466.653l-4.57.28c-.326.046-.56-.094-.56-.42V8.568z" />
    </svg>
)

const ChromeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <circle fill="#4285F4" cx="12" cy="12" r="4.5" />
        <path fill="#EA4335" d="M12 4.5c2.55 0 4.82 1.26 6.2 3.2l-3.1 5.3c-.62-1.12-1.82-1.88-3.1-1.88-1.28 0-2.48.76-3.1 1.88L5.8 7.7C7.18 5.76 9.45 4.5 12 4.5z" />
        <path fill="#FBBC05" d="M5.8 16.3l3.1-5.3c-.03-.16-.05-.33-.05-.5 0-1.28.76-2.48 1.88-3.1L7.63 2.1C4.88 3.78 3 6.67 3 10c0 2.36.87 4.52 2.3 6.18l.5.12z" />
        <path fill="#34A853" d="M12 19.5c-2.55 0-4.82-1.26-6.2-3.2l3.1-5.3c.62 1.12 1.82 1.88 3.1 1.88 1.1 0 2.1-.46 2.8-1.2l3.4 5.62C16.52 18.74 14.36 19.5 12 19.5z" />
    </svg>
)

const AsanaIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#F06A6A" d="M18.78 12.653c-2.216 0-4.015 1.798-4.015 4.015s1.799 4.015 4.015 4.015 4.015-1.798 4.015-4.015-1.799-4.015-4.015-4.015zm-13.56 0c-2.216 0-4.015 1.798-4.015 4.015S3.004 20.683 5.22 20.683s4.015-1.798 4.015-4.015-1.799-4.015-4.015-4.015zM12 3.317c-2.216 0-4.015 1.798-4.015 4.015S9.784 11.347 12 11.347s4.015-1.798 4.015-4.015S14.216 3.317 12 3.317z" />
    </svg>
)

const SalesforceIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#00A1E0" d="M10.063 4.5c-.947 0-1.826.3-2.544.81a3.58 3.58 0 0 0-2.85-1.41c-1.99 0-3.606 1.62-3.606 3.61 0 .21.018.415.054.614A3.11 3.11 0 0 0 0 10.81c0 1.71 1.386 3.09 3.094 3.09.27 0 .532-.034.782-.1a3.45 3.45 0 0 0 3.18 2.1c.842 0 1.628-.302 2.235-.806a3.16 3.16 0 0 0 2.584 1.338c1.306 0 2.436-.79 2.93-1.92a3.29 3.29 0 0 0 1.32.276c1.828 0 3.312-1.487 3.312-3.32 0-.266-.03-.525-.09-.774A2.72 2.72 0 0 0 21 8.16c0-1.36-.995-2.487-2.294-2.696a3.11 3.11 0 0 0-2.956-2.166c-.718 0-1.384.244-1.912.654A3.59 3.59 0 0 0 10.063 4.5z" />
    </svg>
)

const FigmaIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
        <path fill="#A259FF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
        <path fill="#F24E1E" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
        <path fill="#FF7262" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
        <path fill="#1ABCFE" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
    </svg>
)

const JiraIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#2684FF" d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005z" />
        <path fill="#2684FF" d="M17.11 5.986H5.539a5.218 5.218 0 0 0 5.233 5.214h2.129v2.058a5.218 5.218 0 0 0 5.214 5.215V6.99a1.005 1.005 0 0 0-1.005-1.005z" />
        <path fill="#2684FF" d="M22.647.458H11.077a5.218 5.218 0 0 0 5.233 5.215h2.129v2.057a5.218 5.218 0 0 0 5.214 5.215V1.463a1.005 1.005 0 0 0-1.005-1.005z" />
    </svg>
)

const HubSpotIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#FF7A59" d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984V3.06a2.2 2.2 0 0 0-2.2-2.2h-.04a2.2 2.2 0 0 0-2.2 2.2v.04c0 .869.506 1.62 1.24 1.975v2.844a5.666 5.666 0 0 0-2.9 1.247l-7.67-5.976a2.387 2.387 0 1 0-1.4 1.737l7.514 5.858a5.697 5.697 0 0 0 .007 5.157l-2.433 2.433a2.087 2.087 0 1 0 1.4 1.4l2.433-2.433a5.71 5.71 0 1 0 4.982-8.212z" />
    </svg>
)

// Integration data with icons
const row1 = [
    { name: 'Slack', Icon: SlackIcon },
    { name: 'Greenhouse', Icon: GreenhouseIcon },
    { name: 'Workday', Icon: WorkdayIcon },
    { name: 'Lever', Icon: LeverIcon },
    { name: 'LinkedIn', Icon: LinkedInIcon },
    { name: 'Zoom', Icon: ZoomIcon },
    { name: 'Zapier', Icon: ZapierIcon },
    { name: 'Okta', Icon: OktaIcon },
]

const row2 = [
    { name: 'Microsoft Teams', Icon: TeamsIcon },
    { name: 'Google', Icon: GoogleIcon },
    { name: 'Chrome', Icon: ChromeIcon },
    { name: 'Calendly', Icon: CalendlyIcon },
    { name: 'Notion', Icon: NotionIcon },
    { name: 'Microsoft', Icon: MicrosoftIcon },
    { name: 'Asana', Icon: AsanaIcon },
    { name: 'Figma', Icon: FigmaIcon },
]

const row3 = [
    { name: 'Jira', Icon: JiraIcon },
    { name: 'HubSpot', Icon: HubSpotIcon },
    { name: 'Salesforce', Icon: SalesforceIcon },
    { name: 'Slack', Icon: SlackIcon },
    { name: 'Google', Icon: GoogleIcon },
    { name: 'Teams', Icon: TeamsIcon },
    { name: 'Zoom', Icon: ZoomIcon },
    { name: 'LinkedIn', Icon: LinkedInIcon },
]

function IntegrationBadge({ item }: { item: { name: string; Icon: React.FC } }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 whitespace-nowrap cursor-pointer hover:shadow-md transition-shadow"
        >
            <item.Icon />
            <span className="text-gray-700 font-medium text-sm">{item.name}</span>
        </motion.div>
    )
}

function ScrollingRow({
    items,
    direction = 'left',
    speed = 25
}: {
    items: typeof row1;
    direction?: 'left' | 'right';
    speed?: number;
}) {
    const doubled = [...items, ...items, ...items]

    return (
        <div className="relative overflow-hidden py-2">
            <motion.div
                className="flex gap-4"
                animate={{
                    x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%']
                }}
                transition={{
                    x: {
                        duration: speed,
                        repeat: Infinity,
                        ease: 'linear',
                    },
                }}
            >
                {doubled.map((item, index) => (
                    <IntegrationBadge key={`${item.name}-${index}`} item={item} />
                ))}
            </motion.div>
        </div>
    )
}

export default function Integrations() {
    return (
        <section className="py-24 bg-gradient-to-b from-blue-50 to-purple-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Integrate with existing workflows
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Stay in your workflow with seamless integrations for your applicant tracking system, video conferencing system, and collaboration tools like Slack, Teams, and email.
                    </p>
                </motion.div>
            </div>

            {/* Scrolling Rows */}
            <div className="space-y-4 mt-12">
                <ScrollingRow items={row1} direction="right" speed={30} />
                <ScrollingRow items={row2} direction="left" speed={25} />
                <ScrollingRow items={row3} direction="right" speed={28} />
            </div>

            {/* CTA Link */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
                <Link
                    href="/integrations"
                    className="inline-flex items-center gap-2 text-primary-blue font-medium hover:underline"
                >
                    <span>See all integrations</span>
                    <ArrowRight size={16} />
                </Link>
            </motion.div>
        </section>
    )
}
