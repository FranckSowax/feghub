'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Package, 
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  Download,
  Bell,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'

// Mock data for charts
const monthlyRevenue = [
  { month: 'Jan', revenue: 45000, orders: 120 },
  { month: 'Fév', revenue: 52000, orders: 135 },
  { month: 'Mar', revenue: 48000, orders: 128 },
  { month: 'Avr', revenue: 61000, orders: 162 },
  { month: 'Mai', revenue: 55000, orders: 145 },
  { month: 'Jun', revenue: 67000, orders: 178 },
]

const industryData = [
  { name: 'BTP', value: 35, color: '#0ea5e9' },
  { name: 'Agroalimentaire', value: 25, color: '#22c55e' },
  { name: 'Services', value: 20, color: '#f59e0b' },
  { name: 'Commerce', value: 15, color: '#ef4444' },
  { name: 'Autres', value: 5, color: '#8b5cf6' },
]

const topProducts = [
  { name: 'Ciment Portland', sales: 1250, change: 12.5 },
  { name: 'Huile de Palme', sales: 980, change: -3.2 },
  { name: 'Services IT', sales: 750, change: 8.7 },
  { name: 'Matériaux Construction', sales: 650, change: 15.3 },
  { name: 'Produits Alimentaires', sales: 580, change: -1.8 },
]

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [dateRange, setDateRange] = useState('30d')

  const stats = [
    {
      name: 'Chiffre d\'affaires',
      value: '€328,000',
      change: '+12.5%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'text-success-600',
      bgColor: 'bg-success-100'
    },
    {
      name: 'Commandes',
      value: '1,248',
      change: '+8.2%',
      changeType: 'increase',
      icon: ShoppingCart,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      name: 'Nouveaux clients',
      value: '89',
      change: '+23.1%',
      changeType: 'increase',
      icon: Users,
      color: 'text-warning-600',
      bgColor: 'bg-warning-100'
    },
    {
      name: 'Produits actifs',
      value: '2,847',
      change: '-2.4%',
      changeType: 'decrease',
      icon: Package,
      color: 'text-error-600',
      bgColor: 'bg-error-100'
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold text-primary-600">FEG Digital Hub</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-secondary-500 hover:text-secondary-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-6 px-4">
          <div className="space-y-2">
            <Link href="/dashboard" className="flex items-center px-4 py-3 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg">
              <BarChart3 className="mr-3 h-5 w-5" />
              Business Intelligence
            </Link>
            <Link href="/marketplace" className="flex items-center px-4 py-3 text-sm font-medium text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50 rounded-lg">
              <ShoppingCart className="mr-3 h-5 w-5" />
              Marketplace
            </Link>
            <Link href="/learning" className="flex items-center px-4 py-3 text-sm font-medium text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50 rounded-lg">
              <Users className="mr-3 h-5 w-5" />
              Formation
            </Link>
            <Link href="/supply-chain" className="flex items-center px-4 py-3 text-sm font-medium text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50 rounded-lg">
              <Package className="mr-3 h-5 w-5" />
              Logistique
            </Link>
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-secondary-900 truncate">Jean Dupont</p>
              <p className="text-xs text-secondary-500 truncate">Ma Société SARL</p>
            </div>
            <button className="text-secondary-400 hover:text-secondary-600">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-secondary-500 hover:text-secondary-700 mr-4"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-semibold text-secondary-900">Tableau de Bord</h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="input text-sm"
              >
                <option value="7d">7 derniers jours</option>
                <option value="30d">30 derniers jours</option>
                <option value="90d">90 derniers jours</option>
                <option value="1y">Cette année</option>
              </select>
              
              <button className="btn btn-outline btn-sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </button>
              
              <button className="btn btn-primary btn-sm">
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </button>
              
              <button className="text-secondary-400 hover:text-secondary-600">
                <Bell className="h-5 w-5" />
              </button>
              
              <button className="text-secondary-400 hover:text-secondary-600">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.name} className="card">
                <div className="card-content">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary-600">{stat.name}</p>
                      <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    {stat.changeType === 'increase' ? (
                      <ArrowUpRight className="h-4 w-4 text-success-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-error-600" />
                    )}
                    <span className={`text-sm font-medium ml-1 ${
                      stat.changeType === 'increase' ? 'text-success-600' : 'text-error-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-secondary-500 ml-1">vs mois dernier</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-secondary-900">Évolution du Chiffre d'Affaires</h3>
                <p className="text-sm text-secondary-600">Revenus mensuels en euros</p>
              </div>
              <div className="card-content">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`€${value.toLocaleString()}`, 'Revenus']} />
                    <Bar dataKey="revenue" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Orders Chart */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-secondary-900">Commandes par Mois</h3>
                <p className="text-sm text-secondary-600">Nombre de commandes reçues</p>
              </div>
              <div className="card-content">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value, 'Commandes']} />
                    <Line 
                      type="monotone" 
                      dataKey="orders" 
                      stroke="#22c55e" 
                      strokeWidth={3}
                      dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Industry Distribution */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-secondary-900">Répartition par Secteur</h3>
                <p className="text-sm text-secondary-600">Distribution des ventes</p>
              </div>
              <div className="card-content">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={industryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {industryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Part']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {industryData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-secondary-600">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium text-secondary-900">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Products */}
            <div className="card lg:col-span-2">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-secondary-900">Produits les Plus Vendus</h3>
                <p className="text-sm text-secondary-600">Top 5 des meilleures ventes</p>
              </div>
              <div className="card-content">
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={product.name} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-medium mr-3">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-secondary-900">{product.name}</p>
                          <p className="text-sm text-secondary-600">{product.sales} ventes</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {product.change > 0 ? (
                          <TrendingUp className="h-4 w-4 text-success-600 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-error-600 mr-1" />
                        )}
                        <span className={`text-sm font-medium ${
                          product.change > 0 ? 'text-success-600' : 'text-error-600'
                        }`}>
                          {product.change > 0 ? '+' : ''}{product.change}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
