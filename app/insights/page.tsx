"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InfoIcon, MapPin, Banknote } from "lucide-react"
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
    legal: {
      status: "Title clear, no encumbrances",
      verification: "Verified with local records",
      ownership: "Single owner with clear title deed",
      zoning: "Residential zone with permission for G+2 construction",
    },
    market: {
      trend: "Price increased 20% in the last year",
      forecast: "Expected to appreciate 15% in next 2 years",
      demand: "High demand due to IT corridor proximity",
      comparables: "Similar plots selling for ₹15,000 per sq. yard",
    },
    infrastructure: {
      roads: "Near ORR, 2km from main road",
      transport: "Bus stop within 500m, metro station planned by 2027",
      amenities: "Shopping mall, hospital within 3km radius",
      development: "Upcoming flyover planned by 2026",
    },
    environmental: {
      pollution: "Low pollution area",
      water: "2km from nearest water body",
      green: "15% green cover in surrounding area",
      risks: "No flood risk, outside seismic zone",
    },
  },
  {
    id: 2,
    title: "Commercial Plot in Kokapet",
    location: "Kokapet",
    area: "1000 sq. yards",
    price: "₹1.5Cr",
    description: "Ideal for commercial development with high ROI potential",
    image: "/placeholder.svg?height=300&width=400",
    legal: {
      status: "Clear title with commercial zoning",
      verification: "Verified with GHMC records",
      ownership: "Corporate ownership with proper documentation",
      zoning: "Commercial zone with high FSI allowance",
    },
    market: {
      trend: "Price increased 30% in the last year",
      forecast: "Expected to appreciate 25% in next 2 years",
      demand: "Very high demand for commercial spaces",
      comparables: "Similar plots selling for ₹18,000 per sq. yard",
    },
    infrastructure: {
      roads: "Direct access to main road, 1km from ORR",
      transport: "Proposed metro station within 1km by 2028",
      amenities: "Business parks and hotels in vicinity",
      development: "IT park development planned in adjacent area",
    },
    environmental: {
      pollution: "Moderate pollution levels",
      water: "No water bodies nearby",
      green: "10% green cover in surrounding area",
      risks: "No significant environmental risks identified",
    },
  },
  {
    id: 3,
    title: "Residential Plot in Shamshabad",
    location: "Shamshabad",
    area: "300 sq. yards",
    price: "₹45L",
    description: "Near airport with upcoming infrastructure developments",
    image: "/placeholder.svg?height=300&width=400",
    legal: {
      status: "Clear title, minor boundary dispute resolved",
      verification: "Verified with local panchayat records",
      ownership: "Joint family ownership with proper succession",
      zoning: "Residential zone with G+1 permission",
    },
    market: {
      trend: "Price increased 15% in the last year",
      forecast: "Expected to appreciate 20% in next 2 years due to airport proximity",
      demand: "Growing demand for residential properties",
      comparables: "Similar plots selling for ₹12,000 per sq. yard",
    },
    infrastructure: {
      roads: "2km from highway, internal roads being developed",
      transport: "Bus connectivity available, 15km from airport",
      amenities: "Schools and small markets within 2km",
      development: "Township development planned in 5km radius",
    },
    environmental: {
      pollution: "Low pollution, occasional aircraft noise",
      water: "Seasonal water body 1km away",
      green: "25% green cover in surrounding area",
      risks: "Low risk of water logging during heavy monsoon",
    },
  },
  {
    id: 4,
    title: "Investment Plot in Kompally",
    location: "Kompally",
    area: "400 sq. yards",
    price: "₹60L",
    description: "Fast-growing area with excellent appreciation potential",
    image: "/placeholder.svg?height=300&width=400",
    legal: {
      status: "Clear title, fully documented",
      verification: "Verified with revenue department",
      ownership: "Single owner with inheritance deed",
      zoning: "Mixed-use zone with flexible development options",
    },
    market: {
      trend: "Price increased 25% in the last year",
      forecast: "Expected to appreciate 30% in next 2 years",
      demand: "Rapidly increasing demand as area develops",
      comparables: "Similar plots selling for ₹14,000 per sq. yard",
    },
    infrastructure: {
      roads: "Connected to highway, internal roads well maintained",
      transport: "Good public transport connectivity",
      amenities: "Shopping centers, schools within 3km",
      development: "IT park expansion planned in vicinity",
    },
    environmental: {
      pollution: "Low to moderate pollution levels",
      water: "Small lake within 3km",
      green: "20% green cover in surrounding area",
      risks: "No significant environmental risks",
    },
  },
  {
    id: 5,
    title: "Premium Villa Plot in Narsingi",
    location: "Narsingi",
    area: "600 sq. yards",
    price: "₹90L",
    description: "Gated community with premium amenities and ORR access",
    image: "/placeholder.svg?height=300&width=400",
    legal: {
      status: "Clear title, part of approved layout",
      verification: "Verified with HMDA records",
      ownership: "Developer owned with transfer rights",
      zoning: "Residential zone with villa development permission",
    },
    market: {
      trend: "Price increased 18% in the last year",
      forecast: "Expected to appreciate 22% in next 2 years",
      demand: "High demand for premium residential plots",
      comparables: "Similar plots selling for ₹16,000 per sq. yard",
    },
    infrastructure: {
      roads: "Direct access to ORR, well-planned internal roads",
      transport: "Limited public transport, primarily car-dependent",
      amenities: "International schools, hospitals within 5km",
      development: "Financial district expansion nearby",
    },
    environmental: {
      pollution: "Very low pollution levels",
      water: "Artificial lake within community",
      green: "30% green cover in surrounding area",
      risks: "No significant environmental risks",
    },
  },
]

export default function InsightsPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id") || "1"
  const [property, setProperty] = useState<any>(null)

  useEffect(() => {
    // Find the property based on the ID from URL
    const selectedProperty = sampleListings.find((item) => item.id === Number.parseInt(id))
    setProperty(selectedProperty || sampleListings[0])
  }, [id])

  if (!property) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
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
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">{property.title}</h1>
              <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center">
                <InfoIcon className="h-4 w-4 mr-1" />
                AI-driven insights in development
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          {property.location}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Area</p>
                        <p className="font-medium">{property.area}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="font-medium flex items-center">
                          <Banknote className="h-4 w-4 mr-1 text-primary" />
                          {property.price}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Description</p>
                      <p>{property.description}</p>
                    </div>

                    <Button asChild className="w-full">
                      <Link href="/contact">Contact Us for Full Report</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="legal" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="legal">Legal Status</TabsTrigger>
                <TabsTrigger value="market">Market Trends</TabsTrigger>
                <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                <TabsTrigger value="environmental">Environmental</TabsTrigger>
              </TabsList>

              <TabsContent value="legal" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
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
                        Title Status
                      </h3>
                      <p>{property.legal.status}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Verification
                      </h3>
                      <p>{property.legal.verification}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Ownership
                      </h3>
                      <p>{property.legal.ownership}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
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
                        Zoning
                      </h3>
                      <p>{property.legal.zoning}</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="market" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
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
                        Price Trend
                      </h3>
                      <p>{property.market.trend}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Forecast
                      </h3>
                      <p>{property.market.forecast}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Demand
                      </h3>
                      <p>{property.market.demand}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        Comparables
                      </h3>
                      <p>{property.market.comparables}</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="infrastructure" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                        Roads
                      </h3>
                      <p>{property.infrastructure.roads}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                          />
                        </svg>
                        Transport
                      </h3>
                      <p>{property.infrastructure.transport}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
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
                        Amenities
                      </h3>
                      <p>{property.infrastructure.amenities}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
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
                        Development
                      </h3>
                      <p>{property.infrastructure.development}</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="environmental" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Pollution
                      </h3>
                      <p>{property.environmental.pollution}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                        Water Bodies
                      </h3>
                      <p>{property.environmental.water}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Green Cover
                      </h3>
                      <p>{property.environmental.green}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        Environmental Risks
                      </h3>
                      <p>{property.environmental.risks}</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
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

