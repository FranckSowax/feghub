'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Grid3X3, 
  List, 
  Star, 
  MapPin, 
  ShoppingCart,
  Heart,
  Eye,
  ChevronDown,
  Building2,
  Package,
  Users,
  BarChart3,
  TrendingUp,
  Award,
  Verified,
  Truck,
  Shield,
  ChevronRight,
  User
} from 'lucide-react'

// Mock data for featured categories
const featuredCategories = [
  {
    id: 1,
    name: 'BTP & Construction',
    icon: Building2,
    count: 156,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop',
    color: 'from-feg-green to-feg-green/80'
  },
  {
    id: 2,
    name: 'Agroalimentaire',
    icon: Package,
    count: 89,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop',
    color: 'from-feg-orange to-feg-orange/80'
  },
  {
    id: 3,
    name: 'Services IT',
    icon: Users,
    count: 67,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
    color: 'from-feg-green to-feg-green/80'
  },
  {
    id: 4,
    name: 'Transport & Logistique',
    icon: Truck,
    count: 45,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    color: 'from-feg-orange to-feg-orange/80'
  }
]

// Mock data for stats
const stats = [
  { label: 'Entreprises Partenaires', value: '1,234', icon: Building2, color: 'text-feg-green' },
  { label: 'Produits & Services', value: '5,678', icon: Package, color: 'text-feg-orange' },
  { label: 'Transactions Réussies', value: '12,345', icon: Award, color: 'text-feg-green' },
  { label: 'Satisfaction Client', value: '98%', icon: Star, color: 'text-feg-orange' }
]

// Mock data for products
const products = [
  {
    id: 1,
    name: 'Ciment Portland CEM II 42.5',
    description: 'Ciment de haute qualité pour construction, conforme aux normes internationales.',
    price: 8500,
    currency: 'XAF',
    unit: 'tonne',
    minOrder: 10,
    stock: 500,
    images: ['https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop'],
    category: 'BTP & Construction',
    seller: {
      name: 'CIMGABON',
      location: 'Libreville',
      rating: 4.8,
      reviews: 156,
      verified: true
    },
    featured: true,
    discount: 5
  },
  {
    id: 2,
    name: 'Huile de Palme Raffinée',
    description: 'Huile de palme de première qualité, production locale certifiée.',
    price: 1200,
    currency: 'XAF',
    unit: 'litre',
    minOrder: 100,
    stock: 2000,
    images: ['https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop'],
    category: 'Agroalimentaire',
    seller: {
      name: 'OLAM Gabon',
      location: 'Port-Gentil',
      rating: 4.6,
      reviews: 89,
      verified: true
    },
    featured: false,
    discount: 0
  },
  {
    id: 3,
    name: 'Services de Développement Web',
    description: 'Création de sites web et applications mobiles pour entreprises.',
    price: 500000,
    currency: 'XAF',
    unit: 'projet',
    minOrder: 1,
    stock: 10,
    images: ['https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop'],
    category: 'Services IT',
    seller: {
      name: 'TechGabon Solutions',
      location: 'Libreville',
      rating: 4.9,
      reviews: 45,
      verified: true
    },
    featured: true,
    discount: 10
  },
  {
    id: 4,
    name: 'Transport de Marchandises',
    description: 'Services de transport routier et logistique dans tout le Gabon.',
    price: 150,
    currency: 'XAF',
    unit: 'km',
    minOrder: 50,
    stock: 100,
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop'],
    category: 'Transport & Logistique',
    seller: {
      name: 'TransGabon Express',
      location: 'Libreville',
      rating: 4.5,
      reviews: 234,
      verified: true
    },
    featured: true,
    discount: 15
  }
]

export default function MarketplacePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-feg-green rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-white font-bold text-sm">FEG</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Marketplace</h1>
              </Link>
              
              <nav className="hidden md:flex items-center space-x-1">
                <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">Accueil</Link>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-feg-green">Marketplace</span>
              </nav>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-feg-orange text-white rounded-full text-xs flex items-center justify-center">3</span>
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-1 sm:space-x-2 p-1 rounded-full hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-feg-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">JD</span>
                  </div>
                  <ChevronDown className="hidden sm:block h-4 w-4 text-gray-500" />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link href="/" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="h-4 w-4 mr-3" />
                      Accueil
                    </Link>
                    <Link href="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <BarChart3 className="h-4 w-4 mr-3" />
                      Dashboard
                    </Link>
                    <Link href="/lms" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Users className="h-4 w-4 mr-3" />
                      Formation
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-feg-green to-feg-green/80 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Marketplace B2B FEG
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Connectez-vous avec les entreprises gabonaises et découvrez des opportunités commerciales
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher des produits, services, entreprises..."
                  className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Catégories Populaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explorez nos principales catégories de produits et services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                    <IconComponent className="h-8 w-8 mb-3" />
                    <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} produits</p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory('Tous')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'Tous'
                    ? 'bg-feg-green text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border'
                }`}
              >
                Tous
              </button>
              {featuredCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-feg-green text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex bg-white border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-feg-green text-white' : 'text-gray-600 hover:bg-gray-50'} rounded-l-lg`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-feg-green text-white' : 'text-gray-600 hover:bg-gray-50'} rounded-r-lg`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
              {selectedCategory !== 'Tous' && ` dans ${selectedCategory}`}
              {searchQuery && ` pour "${searchQuery}"`}
            </p>
          </div>

          {/* Products Grid */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className={`${viewMode === 'list' ? 'w-full h-32' : 'w-full h-48'} object-cover rounded-t-lg ${viewMode === 'list' ? 'rounded-l-lg rounded-tr-none' : ''}`}
                  />
                  {product.featured && (
                    <div className="absolute top-2 left-2 bg-feg-green text-white text-xs px-2 py-1 rounded-full">
                      Mis en avant
                    </div>
                  )}
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-feg-orange text-white text-xs px-2 py-1 rounded-full">
                      -{product.discount}%
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 flex space-x-1">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                      <Heart className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4 flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {product.name}
                    </h3>
                    {product.seller.verified && (
                      <Verified className="h-5 w-5 text-feg-green flex-shrink-0 ml-2" />
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.seller.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.seller.rating} ({product.seller.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{product.seller.location}</span>
                    <span className="mx-2">•</span>
                    <span>{product.seller.name}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-feg-green">
                        {product.price.toLocaleString()} {product.currency}
                      </span>
                      <span className="text-sm text-gray-600 ml-1">/ {product.unit}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Min: {product.minOrder} {product.unit}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-feg-green text-white py-2 px-4 rounded-lg hover:bg-feg-green/90 transition-colors text-sm font-medium">
                      <ShoppingCart className="h-4 w-4 mr-2 inline" />
                      Commander
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      Contacter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
