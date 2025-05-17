'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

interface CarCardProps {
  title: string
  imageUrl: string
  price: number
  source: string
  sourceUrl: string
  currency: string
}

export default function CarCard({
  title,
  imageUrl,
  price,
  source,
  sourceUrl,
  currency,
}: CarCardProps) {
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-blue-600">
            {currency} {price.toLocaleString()}
          </p>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            View on {source}
          </a>
        </div>
        <button
          onClick={() => setShowQuoteForm(true)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Request Import Quote
        </button>
      </div>
    </div>
  )
} 