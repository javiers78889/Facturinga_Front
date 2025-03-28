import { pricingPlans } from '@/src/info/util'
import { Button } from '@headlessui/react'
import { CheckCircle } from 'lucide-react'
import React from 'react'

export default function Precios() {
    return (
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                            Pricing
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            Choose the plan that's right for your business.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex flex-col rounded-lg border p-6 shadow-sm ${plan.featured ? "border-primary" : ""}`}
                        >
                            {plan.featured && (
                                <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                                    Most Popular
                                </div>
                            )}
                            <div className="mt-4 space-y-2">
                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                                <p className="text-muted-foreground">{plan.description}</p>
                                <div className="flex items-baseline">
                                    <span className="text-3xl font-bold">${plan.price}</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                            </div>
                            <ul className="mt-6 space-y-2">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className={`mt-8 ${plan.featured ? "" : "bg-muted text-muted-foreground hover:bg-muted hover:text-foreground"}`}

                            >
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
