'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, LogIn, ChevronDown, ClipboardList, Activity, Sparkles, LineChart, Workflow, ShieldCheck, Zap, Server, Users, Building2, BookOpen, FileText, Video, Blocks } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// --- Navigation Data Configuration ---
const navData = [
  {
    name: 'Product',
    type: 'dropdown',
    items: [
      { name: 'Interview Planning', icon: ClipboardList, href: '/product/planning' },
      { name: 'AI Interviewer', icon: Activity, href: '/product/interviewer', badge: 'NEW' },
      { name: 'AI Interview Notes', icon: Sparkles, href: '/product/notes' },
      { name: 'Interview Insights', icon: LineChart, href: '/product/insights' },
      { name: 'Integrations', icon: Blocks, href: '/product/integrations' },
      { name: 'Compliance and Security', icon: ShieldCheck, href: '/product/security' },
    ]
  },
  {
    name: 'Solutions',
    type: 'dropdown',
    items: [
      { name: 'For Enterprise', icon: Building2, href: '/solutions/enterprise' },
      { name: 'For Startups', icon: Zap, href: '/solutions/startups' },
      { name: 'For Agencies', icon: Users, href: '/solutions/agencies' },
    ]
  },
  {
    name: 'Customers',
    type: 'dropdown',
    items: [
      { name: 'Case Studies', icon: FileText, href: '/customers/stories' },
      { name: 'Wall of Love', icon: Users, href: '/customers/testimonials' },
    ]
  },
  {
    name: 'Resources',
    type: 'dropdown',
    items: [
      { name: 'Blog', icon: BookOpen, href: '/resources/blog' },
      { name: 'Community', icon: Users, href: '/resources/community' },
      { name: 'Help Center', icon: Server, href: '/resources/help' },
    ]
  },
  {
    name: 'Pricing',
    type: 'link',
    href: '/pricing'
  }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)

  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dynamic Styles based on Page & Scroll State
  const navbarClasses = isScrolled
    ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100/50 py-3'
    : isHome
      ? 'bg-transparent py-6'
      : 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4'

  const textColorClass = (isHome && !isScrolled) ? 'text-white' : 'text-gray-600'
  const hoverColorClass = (isHome && !isScrolled) ? 'hover:text-blue-200' : 'hover:text-blue-600'
  const logoTextClass = (isHome && !isScrolled) ? 'text-white' : 'text-slate-900'
  const logoDotClass = (isHome && !isScrolled) ? 'text-blue-300' : 'text-blue-600'
  const logoBgClass = (isHome && !isScrolled) ? 'bg-white/20' : 'bg-blue-600/10'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}
      onMouseLeave={() => setHoveredNav(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group z-50 relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-2xl font-bold transition-colors ${logoTextClass}`}
            >
              ihiring<span className={logoDotClass}>.ai</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navData.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.type === 'dropdown' && setHoveredNav(item.name)}
              >
                {item.type === 'link' ? (
                  <Link
                    href={item.href!}
                    className={`relative px-4 py-2 transition-colors font-medium text-sm ${textColorClass} ${hoverColorClass}`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className={`px-4 py-2 transition-colors font-medium text-sm flex items-center gap-1 ${textColorClass} ${hoverColorClass}`}
                  >
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredNav === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hoveredNav === item.name && item.type === 'dropdown' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4 w-64"
                    >
                      <div className="bg-white rounded-xl shadow-xl ring-1 ring-gray-100 p-2 overflow-hidden">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group relative"
                          >
                            <div className="mt-0.5 p-1.5 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors shrink-0">
                              <subItem.icon size={16} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">{subItem.name}</span>
                                {subItem.badge && (
                                  <span className="text-[10px] font-bold bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium flex items-center space-x-1 px-4 py-2 text-sm"
            >
              <LogIn size={16} />
              <span>Log In</span>
            </Link>
            <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/demo"
                className="btn-glow text-white px-5 py-2.5 rounded-lg font-semibold text-sm"
              >
                Get a Demo
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-y-auto max-h-[80vh]"
          >
            <div className="px-4 py-6 space-y-2">
              {navData.map((item, index) => (
                <div key={item.name}>
                  {item.type === 'link' ? (
                    <Link
                      href={item.href!}
                      className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="px-4 py-2">
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">{item.name}</div>
                      <div className="space-y-1 pl-2 border-l border-gray-100">
                        {item.items?.map(subItem => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center gap-3 py-2 text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <subItem.icon size={16} />
                            <span className="text-base font-medium">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-6 mt-4 border-t border-gray-100 space-y-3">
                <Link
                  href="/login"
                  className="block px-4 py-3 text-center text-gray-700 font-bold hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/demo"
                  className="block btn-glow text-white px-4 py-3 rounded-lg font-bold text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
