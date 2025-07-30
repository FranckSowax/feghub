'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star, 
  Clock, 
  Users, 
  BookOpen,
  Play,
  Download,
  Award,
  TrendingUp,
  Calendar,
  ChevronRight,
  User,
  BarChart3,
  ShoppingCart,
  LogOut,
  GraduationCap,
  CheckCircle,
  PlayCircle,
  FileText,
  Target
} from 'lucide-react'

// Mock data for courses
const courses = [
  {
    id: 1,
    title: 'Gestion Financière pour PME Gabonaises',
    description: 'Apprenez les bases de la gestion financière adaptées au contexte économique gabonais.',
    instructor: 'Dr. Marie Ndong',
    duration: '8 semaines',
    level: 'Intermédiaire',
    students: 245,
    rating: 4.8,
    price: 75000,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
    category: 'Finance',
    progress: 0,
    enrolled: false,
    modules: 12,
    certificate: true
  },
  {
    id: 2,
    title: 'Marketing Digital pour Entreprises Africaines',
    description: 'Stratégies de marketing digital adaptées au marché africain et gabonais.',
    instructor: 'Jean-Claude Obame',
    duration: '6 semaines',
    level: 'Débutant',
    students: 189,
    rating: 4.6,
    price: 50000,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    category: 'Marketing',
    progress: 65,
    enrolled: true,
    modules: 8,
    certificate: true
  },
  {
    id: 3,
    title: 'Développement Durable et RSE',
    description: 'Intégrer les principes de développement durable dans votre entreprise.',
    instructor: 'Prof. Alice Mounguengui',
    duration: '4 semaines',
    level: 'Avancé',
    students: 156,
    rating: 4.9,
    price: 60000,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop',
    category: 'Environnement',
    progress: 0,
    enrolled: false,
    modules: 6,
    certificate: true
  },
  {
    id: 4,
    title: 'Leadership et Management d\'Équipe',
    description: 'Développez vos compétences en leadership pour diriger efficacement vos équipes.',
    instructor: 'Paul Mintsa',
    duration: '10 semaines',
    level: 'Intermédiaire',
    students: 298,
    rating: 4.7,
    price: 80000,
    currency: 'XAF',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    category: 'Management',
    progress: 25,
    enrolled: true,
    modules: 15,
    certificate: true
  }
]

const categories = [
  { name: 'Tous', count: 24, active: true },
  { name: 'Finance', count: 8, active: false },
  { name: 'Marketing', count: 6, active: false },
  { name: 'Management', count: 5, active: false },
  { name: 'Environnement', count: 3, active: false },
  { name: 'Technologie', count: 2, active: false }
]

const stats = [
  { label: 'Cours Disponibles', value: '24', icon: BookOpen, color: 'text-feg-green' },
  { label: 'Étudiants Actifs', value: '1,234', icon: Users, color: 'text-feg-orange' },
  { label: 'Certificats Délivrés', value: '567', icon: Award, color: 'text-feg-green' },
  { label: 'Taux de Réussite', value: '89%', icon: TrendingUp, color: 'text-feg-orange' }
]

export default function LMSPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [showUserMenu, setShowUserMenu] = useState(false)

  const filteredCourses = selectedCategory === 'Tous' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

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
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">LMS</h1>
              </Link>
              
              <nav className="hidden md:flex items-center space-x-1">
                <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">Accueil</Link>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-feg-green">Formation</span>
              </nav>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-1 sm:space-x-2 p-1 rounded-full hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-feg-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">JD</span>
                  </div>
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
                    <Link href="/marketplace" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <ShoppingCart className="h-4 w-4 mr-3" />
                      Marketplace
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
              Centre de Formation FEG
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Développez vos compétences avec nos formations spécialisées pour les entreprises gabonaises
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher une formation..."
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
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-feg-green/10 text-feg-green border border-feg-green/20'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'Tous' ? 'Toutes les formations' : `Formations ${selectedCategory}`}
                </h2>
                <p className="text-gray-600">{filteredCourses.length} formation(s) disponible(s)</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-feg-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-feg-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Courses Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
              : 'space-y-4'
            }>
              {filteredCourses.map((course) => (
                <div key={course.id} className={`bg-white rounded-lg shadow hover:shadow-lg transition-shadow ${
                  viewMode === 'list' ? 'flex' : ''
                }`}>
                  <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className={`w-full object-cover rounded-t-lg ${
                        viewMode === 'list' ? 'h-full rounded-l-lg rounded-t-none' : 'h-48'
                      }`}
                    />
                  </div>
                  
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <span className="inline-block bg-feg-green/10 text-feg-green text-xs px-2 py-1 rounded-full">
                        {course.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {course.modules} modules
                      </div>
                    </div>

                    {course.enrolled && course.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progression</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-feg-green h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          {course.price.toLocaleString()} {course.currency}
                        </span>
                        {course.certificate && (
                          <div className="flex items-center text-xs text-feg-green mt-1">
                            <Award className="h-3 w-3 mr-1" />
                            Certificat inclus
                          </div>
                        )}
                      </div>
                      
                      <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        course.enrolled 
                          ? 'bg-feg-green text-white hover:bg-feg-green/80' 
                          : 'bg-feg-orange text-white hover:bg-feg-orange/80'
                      }`}>
                        {course.enrolled ? 'Continuer' : 'S\'inscrire'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
