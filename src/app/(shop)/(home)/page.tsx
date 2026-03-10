import BackgroundSection from '@/components/BackgroundSection/BackgroundSection'
import { Divider } from '@/components/Divider'
import SectionClientSay from '@/components/SectionClientSay'
import SectionCollectionSlider from '@/components/SectionCollectionSlider'
import SectionGridMoreExplore from '@/components/SectionGridMoreExplore/SectionGridMoreExplore'
import SectionHero2 from '@/components/SectionHero/SectionHero2'
import { getCollections, getGroupCollections, getProducts } from '@/data/data'
import SectionPromo2 from '@/components/SectionPromo2'
import SectionSliderLargeProduct from '@/components/SectionSliderLargeProduct'
import SectionSliderProductCard from '@/components/SectionSliderProductCard'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mak Indus - Premium Gardening & Kitchen Tools",
  description:
    "Mak Indus is a premier online store for high-quality gardening and kitchen tools, featuring a modern, fast, and accessible shopping experience.",
  keywords: [
    "Gardening tools",
    "Kitchen tools",
    "Mak Indus",
    "Online tool store",
    "Tools",
    "E-commerce",
  ],
  robots: {
    index: false,
    follow: false,
  },
};
async function PageHome() {
  const allCollections = await getCollections()
  const featuredCollections = allCollections.slice(0, 4)
  const groupCollections = await getGroupCollections()
  const products = await getProducts()
  const carouselProducts1 = products.slice(0, 8)
  const carouselProducts2 = products.slice(0, 8)
  const carouselProducts3 = products.slice(0, 8)


  return (
    <div className="nc-PageHome relative overflow-hidden">
      <SectionHero2 />
      <SectionCollectionSlider className="my-24 lg:my-32" collections={featuredCollections} />

      <div className="relative container my-24 flex flex-col gap-y-18 lg:my-32 lg:gap-y-32">
        <SectionSliderProductCard data={carouselProducts1} />
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore groupCollections={groupCollections} />
        </div>
        <SectionSliderProductCard data={carouselProducts2} heading="Best Sellers" subHeading="Best selling of the month" />
        <SectionPromo2 />
        <SectionSliderLargeProduct products={carouselProducts3} />
        {/* <Divider /> */}
        <SectionClientSay className="lg:py-4" />
      </div>
    </div>
  )
}

export default PageHome
