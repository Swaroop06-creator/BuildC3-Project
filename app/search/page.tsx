"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InfoIcon } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"

// Sample data for MVP
const sampleListings = [
  {
    id: 1,
    title: "Premium Plot in Gachibowli",
    location: "Gachibowli",
    area: "500 sq. yards",
    price: "₹75L",
    description: "Prime location near IT hub with excellent connectivity",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Commercial Plot in Kokapet",
    location: "Kokapet",
    area: "1000 sq. yards",
    price: "₹1.5Cr",
    description: "Ideal for commercial development with high ROI potential",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Residential Plot in Shamshabad",
    location: "Shamshabad",
    area: "300 sq. yards",
    price: "₹45L",
    description: "Near airport with upcoming infrastructure developments",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Investment Plot in Kompally",
    location: "Kompally",
    area: "400 sq. yards",
    price: "₹60L",
    description: "Fast-growing area with excellent appreciation potential",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Premium Villa Plot in Narsingi",
    location: "Narsingi",
    area: "600 sq. yards",
    price: "₹90L",
    description: "Gated community with premium amenities and ORR access",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function SearchPage() {
  const [location, setLocation] = useState("")
  const [budget, setBudget] = useState("")
  const [purpose, setPurpose] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background">
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

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Find Your Perfect Plot</h1>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <form onSubmit={handleSearch} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Select value={location} onValueChange={setLocation}>
                        <SelectTrigger id="location">
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gachibowli">Gachibowli</SelectItem>
                          <SelectItem value="kokapet">Kokapet</SelectItem>
                          <SelectItem value="shamshabad">Shamshabad</SelectItem>
                          <SelectItem value="kompally">Kompally</SelectItem>
                          <SelectItem value="narsingi">Narsingi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={budget} onValueChange={setBudget}>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10l-50l">₹10L - ₹50L</SelectItem>
                          <SelectItem value="50l-1cr">₹50L - ₹1Cr</SelectItem>
                          <SelectItem value="1cr-2cr">₹1Cr - ₹2Cr</SelectItem>
                          <SelectItem value="2cr+">Above ₹2Cr</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="purpose">Purpose</Label>
                      <Select value={purpose} onValueChange={setPurpose}>
                        <SelectTrigger id="purpose">
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="investment">Investment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Search Properties
                  </Button>
                </form>
              </CardContent>
            </Card>

            {showResults && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Search Results</h2>
                  <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center">
                    <InfoIcon className="h-4 w-4 mr-1" />
                    AI-powered results coming soon
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sampleListings.map((listing) => (
                    <Card key={listing.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{listing.title}</h3>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="font-medium">{listing.location}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Area</p>
                            <p className="font-medium">{listing.area}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Price</p>
                            <p className="font-medium">{listing.price}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{listing.description}</p>
                      </CardContent>
                      <CardFooter className="bg-muted/50 px-6 py-3">
                        <Button asChild variant="outline" className="w-full">
                          <Link href={`/insights?id=${listing.id}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>

        <footer className="bg-muted py-8 border-t mt-12">
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

