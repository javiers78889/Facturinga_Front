import { Button } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'

export default function Publicidad() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Ready to Transform Your Business?
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
          Get started today and see the difference our platform can make for your business.
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:justify-end">
        <Button className="w-full sm:w-auto">
          <Link href="#contact">Get Started Now</Link>
        </Button>
        <Button className="w-full sm:w-auto">
          <Link href="#demo">Schedule a Demo</Link>
        </Button>
      </div>
    </div>
  </section>
  )
}
