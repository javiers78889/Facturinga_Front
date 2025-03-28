import Logo from '@/src/ui/Logo'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full border-t py-6 md:py-12">
            <div className="container mx-5 flex flex-col gap-6 md:flex-row md:justify-between">
                <div className="flex flex-col gap-2">
                    <Logo />
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
                </div>
                <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
