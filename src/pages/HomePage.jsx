import { useScrollReveal }    from '../hooks/useScrollReveal'
import HeroSection          from '../components/sections/HeroSection'
import AboutSection         from '../components/sections/AboutSection'
import BreedsSection        from '../components/sections/BreedsSection'
import DogsSection          from '../components/sections/DogsSection'
import ProcessSection       from '../components/sections/ProcessSection'
import GallerySection       from '../components/sections/GallerySection'
import TestimonialsSection  from '../components/sections/TestimonialsSection'
import ContactSection       from '../components/sections/ContactSection'

export default function HomePage() {
  useScrollReveal()
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BreedsSection />
      <DogsSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}