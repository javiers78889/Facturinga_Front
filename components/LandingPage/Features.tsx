import { features } from '@/src/info/util'
import React from 'react'

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-t-1 ">
             <div className="container px-4 md:px-6">
               <div className="flex flex-col items-center justify-center space-y-4 text-center">
                 <div className="space-y-2">
                   <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                     Features
                   </div>
                   <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need</h2>
                   <p className="max-w-[900px] text-muted-foreground md:text-xl">
                     Our platform provides all the tools you need to succeed in today's competitive market.
                   </p>
                 </div>
               </div>
               <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                 {features.map((feature, index) => (
                   <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                     <div className="rounded-full bg-primary p-2 text-primary-foreground">{feature.icon}</div>
                     <h3 className="text-xl font-bold">{feature.title}</h3>
                     <p className="text-center text-muted-foreground">{feature.description}</p>
                   </div>
                 ))}
               </div>
             </div>
           </section>
  )
}
