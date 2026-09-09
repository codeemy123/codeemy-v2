import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

import HeroSection from "./HeroSection"
import BrandMarquee from "./BrandMarquee"
import DomainShowcase from "./DomainShowcase"
import ProblemSection from "./ProblemSection"
import SolutionSection from "./SolutionSection"
import LearningPaths from "./LearningPaths"
import PopularCourses from "./PopularCourses"
import HowItWorks from "./HowItWorks"
import SocialProof from "./SocialProof"
import LMSAwareness from "./LMSAwareness"
import FinalCTA from "./FinalCTA"
import Testinomials from "../Testinomials"
import ContactPage from "../ContactPage"

const Home = () => {
  const reviewsRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (location.hash === "#reviews" && reviewsRef.current) {
      setTimeout(() => {
        reviewsRef.current.scrollIntoView({ behavior: "smooth" })
      }, 0)
    }
  }, [location])

  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <DomainShowcase />
      <ProblemSection />
      <SolutionSection />
      <LearningPaths />
      <HowItWorks />
      <PopularCourses />
      <SocialProof />
      <LMSAwareness />
      <FinalCTA />

      {/* ✅ Existing testimonials section with scroll ref */}
      <div ref={reviewsRef} id="reviews">
        <Testinomials />
      </div>

      <ContactPage />
    </>
  )
}

export default Home
