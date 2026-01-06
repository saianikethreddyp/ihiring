import Hero from '@/components/Home/Hero'
import FeaturesOverview from '@/components/Home/FeaturesOverview'
import HowItWorks from '@/components/Home/HowItWorks'
import Stats from '@/components/Home/Stats'
import Integrations from '@/components/Home/Integrations'
import Testimonials from '@/components/Home/Testimonials'
import CTA from '@/components/Home/CTA'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturesOverview />
      <HowItWorks />
      <Stats />
      <Integrations />
      <Testimonials />
      <CTA />
    </div>
  )
}
