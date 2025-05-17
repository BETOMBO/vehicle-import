export interface CarListing {
  id: string
  title: string
  imageUrl: string
  price: number
  source: 'Bring a Trailer' | 'ClassicCars.com' | 'Cars & Bids'
  sourceUrl: string
  currency: string
  make: string
  model: string
  year: number
}

// Mock data for development
const mockListings: CarListing[] = [
  {
    id: '1',
    title: '1967 Ford Mustang Fastback',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888',
    price: 45000,
    source: 'Bring a Trailer',
    sourceUrl: 'https://bringatrailer.com/listing/1967-ford-mustang-2/',
    currency: 'USD',
    make: 'Ford',
    model: 'Mustang',
    year: 1967,
  },
  {
    id: '2',
    title: '1972 Datsun 240Z',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
    price: 35000,
    source: 'ClassicCars.com',
    sourceUrl: 'https://classiccars.com/listing/1972-datsun-240z',
    currency: 'USD',
    make: 'Datsun',
    model: '240Z',
    year: 1972,
  },
  {
    id: '3',
    title: '1989 BMW M3 E30',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7',
    price: 75000,
    source: 'Cars & Bids',
    sourceUrl: 'https://carsandbids.com/auctions/1989-bmw-m3',
    currency: 'USD',
    make: 'BMW',
    model: 'M3',
    year: 1989,
  },
]

export async function getCarListings(query?: string): Promise<CarListing[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (!query) {
    return mockListings
  }

  const searchQuery = query.toLowerCase()
  return mockListings.filter(
    (car) =>
      car.title.toLowerCase().includes(searchQuery) ||
      car.make.toLowerCase().includes(searchQuery) ||
      car.model.toLowerCase().includes(searchQuery)
  )
}

export async function getCarById(id: string): Promise<CarListing | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const car = mockListings.find((car) => car.id === id)
  return car || null
}

// Mock function for calculating landed cost
export function calculateLandedCost(
  price: number,
  currency: string,
  destination: string = 'Australia'
): number {
  // This is a placeholder calculation
  // In a real application, this would consider:
  // - Currency conversion rates
  // - Import duties
  // - Shipping costs
  // - Insurance
  // - Compliance costs
  const exchangeRate = currency === 'USD' ? 1.5 : 1 // Mock exchange rate
  const importDuty = 0.05 // 5% import duty
  const shippingCost = 5000 // Mock shipping cost in AUD
  const complianceCost = 3000 // Mock compliance cost in AUD

  const priceInAUD = price * exchangeRate
  const dutyAmount = priceInAUD * importDuty
  const totalCost = priceInAUD + dutyAmount + shippingCost + complianceCost

  return Math.round(totalCost)
} 