import { testimonials } from '@/src/info/util'
import Image from 'next/image'
import React from 'react'

export default function Testimonial() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                      Testimonials
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                      Don't just take our word for it. Here's what our customers have to say about our solution.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="rounded-lg border p-6 shadow-sm">
                      <div className="flex items-start gap-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div className="space-y-1">
                          <h3 className="font-bold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
  )
}
