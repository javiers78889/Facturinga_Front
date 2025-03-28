"use client"

import NavBarApp from "@/components/LandingPage/NavBarApp"
import Intro from "@/components/LandingPage/Intro"
import Features from "@/components/LandingPage/Features"
import Testimonial from "@/components/LandingPage/Testimonial"
import Precios from "@/components/LandingPage/Precios"
import Preguntas from "@/components/LandingPage/Preguntas"
import Publicidad from "@/components/LandingPage/Publicidad"
import Footer from "@/components/LandingPage/Footer"


export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBarApp />
      <main className="flex-1 ">
        <Intro />

        <Features />

        <Testimonial />

        <Precios />

        <Preguntas />
        <Publicidad />
      </main>
      <Footer />
    </div>
  )
}


