import BgGlassmorphism from '@/components/BgGlassmorphism/BgGlassmorphism'
import { Divider } from '@/components/Divider'
import SectionClientSay from '@/components/SectionClientSay'
import SectionPromo1 from '@/components/SectionPromo1'
import rightImg from '@/images/hero-right1.png'
import { Metadata } from 'next'
import SectionFounder from './SectionFounder'
import SectionHero from './SectionHero'
import SectionStatistic from './SectionStatistic'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Dedicated to providing premium kitchen and gardening tools. We curate high-quality equipment to help you create a beautiful home and a thriving garden.',
}

const PageAbout = () => {
  return (
    <div>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      <div className="container flex flex-col gap-y-16 py-16 lg:gap-y-28 lg:py-28 lg:pt-20">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          subHeading="We are dedicated to providing the finest kitchen and gardening tools. Our mission is to empower home cooks and garden enthusiasts with high-quality, durable equipment that makes every task a pleasure."
        />
        <SectionFounder />
        <Divider />
        <SectionStatistic />
        <Divider />
        <SectionClientSay />

        <Divider />
        <SectionPromo1 />
      </div>
    </div>
  )
}

export default PageAbout
