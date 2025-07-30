'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Filter, 
  MapPin, 
  Truck, 
  Package, 
  Clock,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Calendar,
  ChevronRight,
  User,
  ShoppingCart,
  LogOut,
  RefreshCw,
  Eye,
  Edit,
  MoreHorizontal,
  Ship,
  Plane,
  Navigation,
  Warehouse,
  Target
} from 'lucide-react'

// Mock data for shipments
const shipments = [
  {
    id: 'SHP-2024-001',
    origin: 'Port Autonome Owendo',
    destination: 'Libreville Centre',
    status: 'En transit',
    statusColor: 'text-blue-600 bg-blue-100',
    cargo: 'Matériaux de construction',
    weight: '15.5 tonnes',
    estimatedDelivery: '2024-01-25',
    progress: 65,
    carrier: 'TransGabon Express',
    trackingUpdates: [
      { time: '08:00', location: 'Port Autonome Owendo', status: 'Chargement terminé' },
      { time: '10:30', location: 'Route Nationale 1', status: 'En transit' },
      { time: '12:15', location: 'Checkpoint Ntoum', status: 'Contrôle douanier' }
    ]
  },
  {
    id: 'SHP-2024-002',
    origin: 'Franceville',
    destination: 'Port-Gentil',
    status: 'Livré',
    statusColor: 'text-green-600 bg-green-100',
    cargo: 'Produits agroalimentaires',
    weight: '8.2 tonnes',
    estimatedDelivery: '2024-01-20',
    progress: 100,
    carrier: 'LogiGabon',
    trackingUpdates: [
      { time: '14:00', location: 'Franceville', status: 'Départ' },
      { time: '18:45', location: 'Lastoursville', status: 'Escale technique' },
      { time: '09:30', location: 'Port-Gentil', status: 'Livraison effectuée' }
    ]
  },
  {
    id: 'SHP-2024-003',
    origin: 'Libreville',
    destination: 'Oyem',
    status: 'Retardé',
    statusColor: 'text-red-600 bg-red-100',
    cargo: 'Équipements médicaux',
    weight: '3.8 tonnes',
    estimatedDelivery: '2024-01-28',
    progress: 25,
    carrier: 'MedTransport Gabon',
    trackingUpdates: [
      { time: '06:00', location: 'Libreville', status: 'Préparation' },
      { time: '08:30', location: 'Entrepôt central', status: 'Problème technique' }
    ]
  }
]

const warehouses = [
  {
    id: 1,
    name: 'Entrepôt Central Libreville',
    location: 'Libreville',
    capacity: '85%',
    items: 1247,
    status: 'Opérationnel',
    temperature: '22°C',
    humidity: '45%'
  },
  {
    id: 2,
    name: 'Centre Logistique Port-Gentil',
    location: 'Port-Gentil',
    capacity: '67%',
    items: 892,
    status: 'Opérationnel',
    temperature: '24°C',
    humidity: '52%'
  },
  {
    id: 3,
    name: 'Dépôt Régional Franceville',
    location: 'Franceville',
    capacity: '92%',
    items: 456,
    status: 'Attention',
    temperature: '26°C',
    humidity: '48%'
  }
]

const metrics = [
  { 
    label: 'Livraisons à Temps', 
    value: '94.2%', 
    change: '+2.1%', 
    trend: 'up',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  { 
    label: 'Coût Moyen Transport', 
    value: '125,000 XAF', 
    change: '-5.3%', 
    trend: 'down',
    icon: TrendingDown,
    color: 'text-feg-orange'
  },
  { 
    label: 'Expéditions Actives', 
    value: '47', 
    change: '+12', 
    trend: 'up',
    icon: Truck,
    color: 'text-feg-green'
  },
  { 
    label: 'Temps Moyen Livraison', 
    value: '2.8 jours', 
    change: '-0.3j', 
    trend: 'down',
    icon: Clock,
    color: 'text-blue-600'
  }
]

export default function SupplyChainPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-feg-orange rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-white font-bold text-sm">FEG</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Supply Chain</h1>
              </Link>
              
              <nav className="hidden md:flex items-center space-x-1">
                <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">Accueil</Link>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-feg-orange">Chaîne Logistique</span>
              </nav>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <RefreshCw className="h-5 w-5" />
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-1 sm:space-x-2 p-1 rounded-full hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-feg-orange rounded-full flex items-center justify-center">
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

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-feg-orange text-feg-orange'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Vue d'ensemble
            </button>
            <button
              onClick={() => setActiveTab('shipments')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'shipments'
                  ? 'border-feg-orange text-feg-orange'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Expéditions
            </button>
            <button
              onClick={() => setActiveTab('warehouses')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'warehouses'
                  ? 'border-feg-orange text-feg-orange'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Entrepôts
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-feg-orange text-feg-orange'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Analytiques
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                      <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                    </div>
                    <div className={`p-3 rounded-full bg-gray-100`}>
                      <metric.icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">par rapport au mois dernier</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Shipments */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Expéditions Récentes</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Expédition
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trajet
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Statut
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Livraison Prévue
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {shipments.slice(0, 5).map((shipment) => (
                      <tr key={shipment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{shipment.id}</div>
                            <div className="text-sm text-gray-500">{shipment.cargo}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{shipment.origin}</div>
                          <div className="text-sm text-gray-500">→ {shipment.destination}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${shipment.statusColor}`}>
                            {shipment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {shipment.estimatedDelivery}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-feg-orange hover:text-feg-orange/80">
                            <Eye className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Shipments Tab */}
        {activeTab === 'shipments' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Rechercher une expédition..."
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-feg-orange focus:border-feg-orange"
                    />
                  </div>
                </div>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres
                </button>
              </div>
            </div>

            {/* Shipments List */}
            <div className="grid gap-6">
              {shipments.map((shipment) => (
                <div key={shipment.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{shipment.id}</h3>
                      <p className="text-gray-600">{shipment.cargo} - {shipment.weight}</p>
                    </div>
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${shipment.statusColor}`}>
                      {shipment.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Origine</p>
                      <p className="font-medium">{shipment.origin}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Destination</p>
                      <p className="font-medium">{shipment.destination}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Transporteur</p>
                      <p className="font-medium">{shipment.carrier}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progression</span>
                      <span>{shipment.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-feg-orange h-2 rounded-full" 
                        style={{ width: `${shipment.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Tracking Updates */}
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Dernières mises à jour</h4>
                    <div className="space-y-2">
                      {shipment.trackingUpdates.slice(0, 2).map((update, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-feg-orange rounded-full mr-3"></div>
                          <span className="text-gray-500 mr-2">{update.time}</span>
                          <span className="font-medium mr-2">{update.location}</span>
                          <span className="text-gray-600">{update.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Warehouses Tab */}
        {activeTab === 'warehouses' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {warehouses.map((warehouse) => (
              <div key={warehouse.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{warehouse.name}</h3>
                    <p className="text-gray-600 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {warehouse.location}
                    </p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    warehouse.status === 'Opérationnel' 
                      ? 'text-green-600 bg-green-100' 
                      : 'text-yellow-600 bg-yellow-100'
                  }`}>
                    {warehouse.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Capacité utilisée</span>
                      <span>{warehouse.capacity}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          parseInt(warehouse.capacity) > 90 ? 'bg-red-500' : 
                          parseInt(warehouse.capacity) > 75 ? 'bg-yellow-500' : 'bg-feg-green'
                        }`}
                        style={{ width: warehouse.capacity }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Articles stockés</p>
                      <p className="text-xl font-semibold text-gray-900">{warehouse.items.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Température</p>
                      <p className="text-xl font-semibold text-gray-900">{warehouse.temperature}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <button className="w-full px-4 py-2 bg-feg-orange text-white rounded-lg hover:bg-feg-orange/80 transition-colors">
                      Voir les détails
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytiques de Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Graphique des livraisons</p>
                  </div>
                </div>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Répartition des coûts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
