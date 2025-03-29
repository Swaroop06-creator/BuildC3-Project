"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className="flex flex-col min-h-screen">
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-primary">
                Land Investment Guide
              </Link>
              <div className="flex items-center space-x-6">
                <Link href="/" className="font-medium hover:text-primary">
                  Home
                </Link>
                <Link href="/search" className="font-medium hover:text-primary">
                  Search
                </Link>
                <Link href="/insights" className="font-medium hover:text-primary">
                  Insights
                </Link>
                <Link href="/contact" className="font-medium hover:text-primary">
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Welcome to Land Investment Guide</h1>
                  <h2 className="text-2xl md:text-3xl text-muted-foreground">Your Smart Land Investment Partner</h2>
                  <p className="text-lg text-muted-foreground">
                    Find the perfect plot with AI-driven insights on legal, market, and infrastructure factors.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/search" className="inline-flex items-center">
                      Start Searching
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="Hyderabad Map"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg">
                    <p className="text-sm font-medium">Hyderabad Region</p>
                    <p className="text-xs text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose Land Investment Guide?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We combine technology with local expertise to help you make informed decisions about land investments
                  in Hyderabad.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Legal Verification</h3>
                  <p className="text-muted-foreground">
                    Get insights on title clarity, encumbrances, and legal status of properties.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Market Trends</h3>
                  <p className="text-muted-foreground">
                    Understand price trends, growth potential, and investment opportunities.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-sm border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Infrastructure Analysis</h3>
                  <p className="text-muted-foreground">
                    Discover nearby amenities, upcoming developments, and connectivity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to find your perfect investment?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Start your search now and discover prime land opportunities in Hyderabad with our AI-powered insights.
              </p>
              <Button size="lg" asChild>
                <Link href="/search">Start Searching</Link>
              </Button>
            </div>
          </section>
        </main>

        <footer className="bg-muted py-8 border-t">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-muted-foreground">© 2025 LandWise Hyderabad. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

