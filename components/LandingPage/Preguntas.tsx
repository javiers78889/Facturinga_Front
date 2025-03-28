import { faqs } from '@/src/info/util'
import React from 'react'

export default function Preguntas() {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 border-t-1">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            Find answers to common questions about our platform.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-lg border p-6 shadow-sm">
                            <h3 className="text-xl font-bold">{faq.question}</h3>
                            <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}
