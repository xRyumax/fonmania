import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ProductSection } from "@/components/product-section"
import { LocationSection } from "@/components/location-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="space-y-6">
        <HeroSection />
        <StatsSection />
        <ProductSection />
        <LocationSection />
        <WhyChooseUsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
