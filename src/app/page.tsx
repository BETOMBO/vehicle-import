'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import CarCard from './components/CarCard'
import QuoteForm from './components/QuoteForm'
import { getCarListings, type CarListing } from './services/carService'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [listings, setListings] = useState<CarListing[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCar, setSelectedCar] = useState<CarListing | null>(null)

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true)
      const results = await getCarListings(searchQuery)
      setListings(results)
      setLoading(false)
    }

    const debounceTimer = setTimeout(fetchListings, 300)
    return () => clearTimeout(debounceTimer)
  }, [searchQuery])

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Find Your Dream Classic Car
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Search through thousands of rare and classic cars from global auctions
          and get them imported to Australia
        </p>
      </section>

      {/* Search Section */}
      <section className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by make, model, or keyword..."
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </section>

      {/* Featured Listings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2>
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((car) => (
              <CarCard
                key={car.id}
                title={car.title}
                imageUrl={car.imageUrl}
                price={car.price}
                source={car.source}
                sourceUrl={car.sourceUrl}
                currency={car.currency}
              />
            ))}
          </div>
        )}
      </section>

      {/* Quote Form Modal */}
      {selectedCar && (
        <QuoteForm
          vehicleUrl={selectedCar.sourceUrl}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  )
} 