'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { CheckCircle, ArrowRight, Zap, Building2, Users } from 'lucide-react'

// Generic Visual Component
const GenericVisual = ({ title }: { title: string }) => (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-10 font-sans border border-gray-100">
        <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <Users size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500">High-fidelity visualization coming soon.</p>
        </div>
    </div>
)

// --- Solutions Pages ---
export default function EnterprisePage() {
    return (
        <FeaturePage
            title="Enterprise Solutions"
            subtitle="Scale With Confidence"
            description="Enterprise-grade features, security, and support for large organizations hiring at scale."
            icon={Building2}
            visual={<GenericVisual title="Enterprise Dashboard" />}
            features={[
                { title: 'SSO & Advanced Security', description: 'SAML, SCIM, and dedicated security controls.', icon: CheckCircle },
                { title: 'Dedicated Support', description: '24/7 priority support and dedicated success manager.', icon: Users },
                { title: 'Custom API Limits', description: 'Higher rate limits and custom integrations.', icon: Zap },
            ]}
        />
    )
}
