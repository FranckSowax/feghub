'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Bell, 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Calendar,
  MapPin,
  Building2,
  BarChart3,
  ShoppingCart,
  GraduationCap,
  Truck,
  Plus,
  Heart,
  Share2,
  Bookmark,
  MoreHorizontal,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Star,
  Eye,
  ArrowRight,
  Factory
} from 'lucide-react'

// Mock data for notifications
const notifications = [
  {
    id: 1,
    type: 'order',
    title: 'Nouvelle commande reçue',
    message: 'Commande #CMD-2024-001 de TechGabon Solutions',
    time: '5 min',
    read: false,
    icon: ShoppingCart,
    color: 'text-green-600'
  },
  {
    id: 2,
    type: 'message',
    title: 'Nouveau message',
    message: 'CIMGABON vous a envoyé un message',
    time: '15 min',
    read: false,
    icon: MessageCircle,
    color: 'text-blue-600'
  },
  {
    id: 3,
    type: 'event',
    title: 'Événement à venir',
    message: 'Salon du BTP Gabon 2024 dans 3 jours',
    time: '1h',
    read: true,
    icon: Calendar,
    color: 'text-purple-600'
  }
]

// Mock data for quick stats
const quickStats = [
  {
    label: 'Commandes ce mois',
    value: '127',
    change: '+12%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'text-green-600'
  },
  {
    label: 'Nouveaux membres',
    value: '45',
    change: '+8%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    label: 'CA mensuel',
    value: '2.4M XAF',
    change: '+15%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-feg-green'
  },
  {
    label: 'Formations actives',
    value: '18',
    change: '+3',
    trend: 'up',
    icon: GraduationCap,
    color: 'text-feg-orange'
  }
]

// Mock data for trending topics
const trendingTopics = [
  { id: 1, topic: '#DigitalisationGabon', posts: 156, growth: '+25%' },
  { id: 2, topic: '#BTPGabon2024', posts: 89, growth: '+18%' },
  { id: 3, topic: '#InnovationTech', posts: 67, growth: '+12%' },
  { id: 4, topic: '#EconomieVerte', posts: 45, growth: '+8%' },
  { id: 5, topic: '#FormationPro', posts: 34, growth: '+15%' }
]

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: 'Salon du BTP Gabon 2024',
    date: '2024-02-15',
    time: '09:00',
    location: 'Centre de Conférences, Libreville',
    attendees: 250,
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Forum Innovation Technologique',
    date: '2024-02-20',
    time: '14:00',
    location: 'Université Omar Bongo, Libreville',
    attendees: 180,
    category: 'Technologie',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Atelier Formation Digitale',
    date: '2024-02-25',
    time: '10:00',
    location: 'FEG Digital Hub, Port-Gentil',
    attendees: 120,
    category: 'Formation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop'
  }
]

// Mock data for the social feed
const posts = [
  {
    id: 1,
    author: {
      name: 'CIMGABON',
      avatar: 'CG',
      role: 'Industrie du Ciment',
      location: 'Libreville',
      verified: true
    },
    content: 'Nous sommes fiers d\'annoncer le lancement de notre nouvelle ligne de production de ciment écologique. Une innovation qui respecte l\'environnement tout en maintenant la qualité premium.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    time: '2h',
    likes: 24,
    comments: 8,
    shares: 3,
    category: 'Innovation'
  },
  {
    id: 2,
    author: {
      name: 'OLAM Gabon',
      avatar: 'OG',
      role: 'Agroalimentaire',
      location: 'Port-Gentil',
      verified: true
    },
    content: 'Formation gratuite sur les techniques modernes de transformation de l\'huile de palme. Inscriptions ouvertes pour toutes les entreprises membres FEG.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
    time: '4h',
    likes: 18,
    comments: 12,
    shares: 7,
    category: 'Formation'
  },
  {
    id: 3,
    author: {
      name: 'TechGabon Solutions',
      avatar: 'TG',
      role: 'Services IT',
      location: 'Libreville',
      verified: true
    },
    content: 'Recherche partenaires pour projet de digitalisation des PME gabonaises. Ensemble, modernisons notre économie !',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    time: '6h',
    likes: 31,
    comments: 15,
    shares: 9,
    category: 'Partenariat'
  },
  {
    id: 4,
    author: {
      name: 'Gabon Timber Export',
      avatar: 'GT',
      role: 'Exploitation Forestière',
      location: 'Franceville',
      verified: true
    },
    content: 'Certification FSC obtenue pour notre nouvelle concession forestière. Un engagement fort pour une exploitation durable et responsable de nos ressources.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    time: '8h',
    likes: 42,
    comments: 18,
    shares: 12,
    category: 'Environnement'
  },
  {
    id: 5,
    author: {
      name: 'Port Autonome Owendo',
      avatar: 'PO',
      role: 'Transport Maritime',
      location: 'Owendo',
      verified: true
    },
    content: 'Nouveau terminal conteneurs opérationnel ! Capacité doublée pour accompagner la croissance du commerce international gabonais.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    time: '12h',
    likes: 67,
    comments: 23,
    shares: 15,
    category: 'Infrastructure'
  }
]

const communities = [
  { name: 'BTP & Construction', members: 156, color: 'bg-blue-500' },
  { name: 'Agroalimentaire', members: 89, color: 'bg-green-500' },
  { name: 'Services IT', members: 67, color: 'bg-purple-500' },
  { name: 'Transport & Logistique', members: 45, color: 'bg-orange-500' }
]

const events = [
  { title: 'Forum Économique FEG 2025', date: '15 Fév', attendees: 234 },
  { title: 'Salon de l\'Innovation', date: '22 Fév', attendees: 156 },
  { title: 'Formation Export', date: '28 Fév', attendees: 89 }
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('feed')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo et Menu Mobile */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-feg-green rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-white font-bold text-sm">FEG</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Digital Hub</h1>
              </div>
            </div>

            {/* Search Bar - Masqué sur mobile */}
            <div className="hidden sm:flex flex-1 max-w-lg mx-4 lg:mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher entreprises, produits, formations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-feg-green focus:border-feg-green text-sm"
                />
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search mobile */}
              <button className="sm:hidden p-2 text-gray-400 hover:text-gray-600">
                <Search className="h-5 w-5" />
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 text-gray-400 hover:text-gray-600 relative"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                    {notifications.filter(n => !n.read).length}
                  </span>
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => {
                        const IconComponent = notification.icon
                        return (
                          <div key={notification.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                            !notification.read ? 'bg-blue-50' : ''
                          }`}>
                            <div className="flex items-start space-x-3">
                              <div className={`p-2 rounded-full bg-gray-100 ${notification.color}`}>
                                <IconComponent className="h-4 w-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                              </div>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="p-3 border-t border-gray-200">
                      <button className="text-sm text-feg-green hover:text-feg-green/80 font-medium">
                        Voir toutes les notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <button className="hidden sm:block p-2 text-gray-400 hover:text-gray-600">
                <MessageCircle className="h-5 w-5" />
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
                    <Link href="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <BarChart3 className="h-4 w-4 mr-3" />
                      Dashboard
                    </Link>
                    <Link href="/marketplace" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <ShoppingCart className="h-4 w-4 mr-3" />
                      Marketplace
                    </Link>
                    <Link href="/sourcing" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Factory className="h-4 w-4 mr-3" />
                      Sourcing
                    </Link>
                    <Link href="/auth/login" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <LogOut className="h-4 w-4 mr-3" />
                      Connexion
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Mobile - Sous le header */}
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-2">
            <div className="flex space-x-1">
              <button 
                onClick={() => setActiveTab('feed')}
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium text-center ${
                  activeTab === 'feed' ? 'text-feg-green bg-feg-green/10' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Actualités
              </button>
              <button 
                onClick={() => setActiveTab('communities')}
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium text-center ${
                  activeTab === 'communities' ? 'text-feg-green bg-feg-green/10' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Communautés
              </button>
              <button 
                onClick={() => setActiveTab('events')}
                className={`flex-1 px-3 py-2 rounded-md text-xs font-medium text-center ${
                  activeTab === 'events' ? 'text-feg-green bg-feg-green/10' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Événements
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                    <p className={`text-xs font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>{stat.change}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Left Sidebar - Modules - Masqué sur mobile */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="space-y-4">
              {/* User Profile Card - Compact */}
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-feg-green rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">JD</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">Jean Dupont</h3>
                  <p className="text-xs text-gray-500">CEO, TechGabon</p>
                  <div className="grid grid-cols-2 gap-2 mt-3 text-center">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">156</div>
                      <div className="text-xs text-gray-500">Connexions</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">89</div>
                      <div className="text-xs text-gray-500">Posts</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modules - Compact */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Modules</h3>
                <div className="space-y-2">
                  <Link href="/marketplace" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 text-center">
                    <ShoppingCart className="h-6 w-6 text-feg-green mb-1" />
                    <span className="text-xs font-medium">Marketplace</span>
                  </Link>
                  <Link href="/dashboard" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 text-center">
                    <BarChart3 className="h-6 w-6 text-feg-orange mb-1" />
                    <span className="text-xs font-medium">BI Dashboard</span>
                  </Link>
                  <Link href="/lms" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 text-center">
                    <GraduationCap className="h-6 w-6 text-feg-green mb-1" />
                    <span className="text-xs font-medium">Formation</span>
                  </Link>
                  <Link href="/sourcing" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 text-center">
                    <Factory className="h-6 w-6 text-feg-orange mb-1" />
                    <span className="text-xs font-medium">Sourcing</span>
                  </Link>
                </div>
              </div>

              {/* Communities - Compact */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Communautés</h3>
                <div className="space-y-2">
                  {communities.slice(0, 3).map((community, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${community.color}`}></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-gray-900 truncate">{community.name}</div>
                        <div className="text-xs text-gray-500">{community.members}</div>
                      </div>
                    </div>
                  ))}
                  <button className="text-xs text-blue-600 hover:text-blue-700 mt-2">Voir tout</button>
                </div>
              </div>
            </div>
          </div>

          {/* Center Feed - Social Pro */}
          <div className="col-span-1 lg:col-span-8">
            <div className="space-y-4 sm:space-y-6">
              {/* Create Post */}
              <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-feg-green rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">JD</span>
                  </div>
                  <button className="flex-1 text-left px-4 py-2 bg-gray-50 rounded-full text-gray-500 hover:bg-gray-100 text-sm sm:text-base">
                    Quoi de neuf dans votre entreprise ?
                  </button>
                  <button className="p-2 text-feg-green hover:bg-feg-green/10 rounded-full">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Posts Feed */}
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow">
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-feg-green rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-medium text-sm">{post.author.avatar}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 flex-wrap">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{post.author.name}</h4>
                          {post.author.verified && (
                            <div className="w-4 h-4 bg-feg-green rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{post.time}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">{post.author.role} • {post.author.location}</p>
                        <div className="mt-3">
                          <p className="text-gray-900 text-sm sm:text-base leading-relaxed">{post.content}</p>
                        </div>
                        {post.image && (
                          <div className="mt-4">
                            <img 
                              src={post.image} 
                              alt="Post image" 
                              className="w-full h-48 sm:h-64 object-cover rounded-lg border"
                            />
                          </div>
                        )}
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center space-x-4 sm:space-x-6">
                            <button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-red-500">
                              <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                              <span className="text-xs sm:text-sm">{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-feg-green">
                              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                              <span className="text-xs sm:text-sm">{post.comments}</span>
                            </button>
                            <button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-feg-orange">
                              <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                              <span className="text-xs sm:text-sm">{post.shares}</span>
                            </button>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Bookmark className="h-4 w-4 sm:h-5 sm:w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Outils & Infos - Masqué sur mobile */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="space-y-4">
              {/* Trending Topics */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Tendances
                </h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic) => (
                    <div key={topic.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <div>
                        <p className="text-sm font-medium text-feg-green">{topic.topic}</p>
                        <p className="text-xs text-gray-600">{topic.posts} publications</p>
                      </div>
                      <span className="text-xs text-green-600 font-medium">{topic.growth}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Événements à venir
                </h3>
                <div className="space-y-3">
                  {upcomingEvents.slice(0, 2).map((event) => (
                    <div key={event.id} className="border border-gray-200 rounded-lg p-3 hover:border-feg-green transition-colors cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{event.title}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-feg-green font-medium">{event.date}</span>
                            <span className="text-xs text-gray-500">{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600 truncate">{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <Users className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">{event.attendees} participants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full text-sm text-feg-green hover:text-feg-green/80 font-medium py-2">
                    Voir tous les événements
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  Stats FEG
                </h3>
                <div className="space-y-3">
                  <div className="text-center p-2 bg-feg-green/10 rounded">
                    <div className="text-lg font-bold text-feg-green">1,234</div>
                    <div className="text-xs text-gray-600">Entreprises</div>
                  </div>
                  <div className="text-center p-2 bg-feg-orange/10 rounded">
                    <div className="text-lg font-bold text-feg-orange">567</div>
                    <div className="text-xs text-gray-600">Produits</div>
                  </div>
                  <div className="text-center p-2 bg-feg-green/10 rounded">
                    <div className="text-lg font-bold text-feg-green">89</div>
                    <div className="text-xs text-gray-600">Formations</div>
                  </div>
                </div>
              </div>

              {/* Trending Topics - Compact */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                  Tendances
                </h3>
                <div className="space-y-2">
                  <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <div className="font-medium text-gray-900 text-xs">#DigitalisationGabon</div>
                    <div className="text-xs text-gray-500">234 posts</div>
                  </div>
                  <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <div className="font-medium text-gray-900 text-xs">#InnovationFEG</div>
                    <div className="text-xs text-gray-500">156 posts</div>
                  </div>
                  <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <div className="font-medium text-gray-900 text-xs">#EconomieVerte</div>
                    <div className="text-xs text-gray-500">89 posts</div>
                  </div>
                </div>
              </div>

              {/* Upcoming Events - Compact */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Événements
                </h3>
                <div className="space-y-2">
                  {events.slice(0, 2).map((event, index) => (
                    <div key={index} className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <div className="flex items-center justify-between mb-1">
                        <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                          {event.date}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-gray-900 mb-1">{event.title}</div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {event.attendees}
                      </div>
                    </div>
                  ))}
                  <button className="text-xs text-blue-600 hover:text-blue-700 mt-2">Voir tout</button>
                </div>
              </div>

              {/* Quick Tools */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Outils rapides</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-center p-2 bg-feg-green/10 text-feg-green rounded hover:bg-feg-green/20 text-xs">
                    <Plus className="h-4 w-4 mr-1" />
                    Nouveau post
                  </button>
                  <button className="w-full flex items-center justify-center p-2 bg-feg-orange/10 text-feg-orange rounded hover:bg-feg-orange/20 text-xs">
                    <Users className="h-4 w-4 mr-1" />
                    Inviter contact
                  </button>
                  <button className="w-full flex items-center justify-center p-2 bg-feg-green/10 text-feg-green rounded hover:bg-feg-green/20 text-xs">
                    <Calendar className="h-4 w-4 mr-1" />
                    Créer événement
                  </button>
                </div>
              </div>

              {/* Suggestions - Compact */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Suggestions</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium text-xs">AB</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-xs truncate">Alice Bongo</div>
                      <div className="text-xs text-gray-500">CEO, EcoGabon</div>
                    </div>
                    <button className="px-2 py-1 bg-feg-green text-white text-xs rounded hover:bg-feg-green/80">
                      +
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-feg-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium text-xs">PM</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-xs truncate">Paul Mba</div>
                      <div className="text-xs text-gray-500">Dir. Innovation</div>
                    </div>
                    <button className="px-2 py-1 bg-feg-green text-white text-xs rounded hover:bg-feg-green/80">
                      +
                    </button>
                  </div>
                  <button className="text-xs text-blue-600 hover:text-blue-700 mt-2">Voir plus</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Navigation Mobile Flottante - Visible uniquement sur mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          <Link href="/marketplace" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50">
            <ShoppingCart className="h-5 w-5 text-feg-green mb-1" />
            <span className="text-xs font-medium text-gray-600">Marketplace</span>
          </Link>
          <Link href="/dashboard" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50">
            <BarChart3 className="h-5 w-5 text-feg-orange mb-1" />
            <span className="text-xs font-medium text-gray-600">Dashboard</span>
          </Link>
          <Link href="/lms" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50">
            <GraduationCap className="h-5 w-5 text-feg-green mb-1" />
            <span className="text-xs font-medium text-gray-600">Formation</span>
          </Link>
          <Link href="/supply-chain" className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50">
            <Truck className="h-5 w-5 text-feg-orange mb-1" />
            <span className="text-xs font-medium text-gray-600">Supply Chain</span>
          </Link>
        </div>
      </div>

      {/* Padding bottom pour éviter que le contenu soit masqué par la nav mobile */}
      <div className="lg:hidden h-20"></div>
    </div>
  )
}
