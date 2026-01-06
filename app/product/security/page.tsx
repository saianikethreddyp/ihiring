'use client'

import FeaturePage from '@/components/Templates/FeaturePage'
import { ShieldCheck, Lock, Eye, FileKey, Server, Key } from 'lucide-react'

export default function SecurityPage() {
    const visual = (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center p-10 font-sans text-white">
            <div className="grid grid-cols-2 gap-6 max-w-lg w-full">
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center"><ShieldCheck size={20} /></div>
                    <div>
                        <div className="font-bold text-sm">SOC 2 Type II</div>
                        <div className="text-xs text-slate-400">Certified</div>
                    </div>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center"><Lock size={20} /></div>
                    <div>
                        <div className="font-bold text-sm">GDPR Ready</div>
                        <div className="text-xs text-slate-400">Compliant</div>
                    </div>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center"><FileKey size={20} /></div>
                    <div>
                        <div className="font-bold text-sm">Encryption</div>
                        <div className="text-xs text-slate-400">AES-256</div>
                    </div>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center"><Eye size={20} /></div>
                    <div>
                        <div className="font-bold text-sm">Audit Logs</div>
                        <div className="text-xs text-slate-400">Real-time</div>
                    </div>
                </div>

                <div className="col-span-2 bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-xl flex justify-between items-center shadow-lg shadow-blue-500/20 border border-blue-400">
                    <span className="font-bold flex items-center gap-2"><Server size={18} /> Enterprise Grade Security</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">99.99% Uptime</span>
                </div>
            </div>
        </div>
    )

    const features = [
        { title: 'Data Encryption', description: 'All data is encrypted at rest and in transit using industry-standard protocols.', icon: Lock },
        { title: 'Access Control', description: 'Granular role-based access control (RBAC) ensures data is only seen by authorized personnel.', icon: Key },
        { title: 'Compliance', description: 'We adhere to SOC 2, GDPR, and CCPA standards to keep your data safe.', icon: ShieldCheck },
    ]

    return (
        <FeaturePage
            title="Security & Compliance"
            subtitle="Built on Trust"
            description="We take security seriously. Your data is protected by enterprise-grade infrastructure and rigorous compliance standards."
            icon={ShieldCheck}
            visual={visual}
            features={features}
        />
    )
}
